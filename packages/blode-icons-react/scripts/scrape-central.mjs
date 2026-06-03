// Scrapes icon data from centralicons.com and writes SVGs + metadata into
// icons-svg/ and icons-data/. Replaces the old fingertip Railway-API scraper.
//
// How it works (all derived from the public site bundle, no license required for
// data — the user's Central license only gates UI seat info):
//   1. centralicons.com ships its icon geometry as XOR+gzip "variant packs" at
//      /icons-data/<variant>.<hash>.bin. The 16-byte XOR key (`variantXorKey`),
//      the variant→pack map (`variantManifest`), and per-icon metadata
//      (`iconMetadata`) are embedded in plaintext in the Next.js JS chunks.
//   2. We discover those three values dynamically from the live chunks (never
//      hardcoded, never eval'd — parsed structurally), fetch the packs for the
//      variants we want, XOR-decrypt, gunzip, and JSON.parse to an array of inner
//      SVG bodies ordered by Object.keys(iconMetadata).
//   3. Each body is already `currentColor` markup; we wrap it in the same raw
//      <svg> shell the existing on-disk icons use (no SVGO here — SVGO runs in the
//      build, and writing raw keeps diffs to just changed icons).
//
// By default the scraper is ADD-ONLY: it writes genuinely-new icons (and their
// metadata) and leaves existing icons untouched, so the diff is small and
// review-safe. Central has re-encoded some path strings since the original
// scrape (visually identical, different `d` data); pass --resync to also
// overwrite existing SVGs with Central's current geometry — a deliberate,
// visual-QA-worthy refresh, not the default.
//
// Usage: node scripts/scrape-central.mjs [--dry-run] [--variants=a,b] [--resync]
//        [--prune] [--merge-tags] [--overwrite-category] [--only=<glob>] [--json]
//
// Requires Node >= 18 (native fetch + DecompressionStream). Tested on Node 22.

import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const SVG_DIR = path.join(ROOT, "icons-svg");
const DATA_DIR = path.join(ROOT, "icons-data");
const LEDGER_PATH = path.join(__dirname, "central-icons.json");
const PROVENANCE_PATH = path.join(__dirname, ".central-provenance.json");

const ORIGIN = "https://centralicons.com";
const OUTLINE_VARIANT = "round-outlined-radius-3-stroke-2";
const FILLED_VARIANT = "round-filled-radius-3-stroke-2";
const DEFAULT_VARIANTS = [OUTLINE_VARIANT, FILLED_VARIANT];

// ─── CLI ────────────────────────────────────────────────────────────
const argv = process.argv.slice(2);
const flag = (name) => argv.includes(`--${name}`);
const opt = (name, fallback) => {
  const hit = argv.find((a) => a.startsWith(`--${name}=`));
  return hit ? hit.slice(name.length + 3) : fallback;
};
const OPTS = {
  dryRun: flag("dry-run"),
  resync: flag("resync"),
  prune: flag("prune"),
  mergeTags: flag("merge-tags"),
  overwriteCategory: flag("overwrite-category"),
  json: flag("json"),
  only: opt("only", null),
  variants: opt("variants", DEFAULT_VARIANTS.join(","))
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean),
};

const DIGIT_WORDS = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

const LEADING_DIGIT_RE = /^[0-9]/;
const NON_SLUG_CHARS_RE = /[^a-z0-9-]+/g;
const DOUBLE_DASH_RE = /-{2,}/g;
const EDGE_DASH_RE = /^-+|-+$/g;
const CHUNK_PATH_RE = /\/_next\/static\/chunks\/[^"'?]+\.js/g;
const ENTRY_RE = /([A-Za-z_$][\w$]*):\{((?:[^{}]|"(?:[^"\\]|\\.)*")*)\}/g;
const ESCAPED_QUOTE_RE = /\\"/g;
const GLOB_SPECIALS_RE = /[.+?^${}()|[\]\\]/g;
const GLOB_STAR_RE = /\*/g;
const SVG_PATH_D_RE = / d="([^"]+)"/;
const SLUG_RE = /^[a-z][a-z0-9-]*$/;
const JSON_ARRAY_BLOCK_RE = /( *)("[\w-]+": )\[\n\s*([\s\S]*?)\n\s*\]/g;
const JSON_ARRAY_ITEM_SEP_RE = /,\s*\n\s*/;

function fail(message) {
  console.error(`\n✗ ${message}`);
  process.exit(1);
}

// ─── Name canonicalization ──────────────────────────────────────────
// Single source of truth. Must produce a valid TS-identifier-able kebab slug.
function canonicalizeName(raw) {
  let name = raw.trim().toLowerCase();
  // Leading digit → word (TS identifiers can't start with a digit; the icon's
  // component name is built from this slug).
  if (LEADING_DIGIT_RE.test(name)) {
    name = `${DIGIT_WORDS[Number(name[0])]}${name.slice(1)}`;
  }
  name = name.replace(NON_SLUG_CHARS_RE, "-"); // any stray separators → dash
  name = name.replace(DOUBLE_DASH_RE, "-"); // collapse doubles
  name = name.replace(EDGE_DASH_RE, ""); // trim leading/trailing dashes
  return name;
}

// ─── Structural extraction from minified chunks (never eval) ─────────
// Returns the balanced {...} or [...] literal that follows `marker` in `src`.
// biome-ignore lint/complexity/noExcessiveCognitiveComplexity: a single-pass string/brace scanner is inherently branchy; splitting it would obscure the parse
function extractLiteralAfter(src, marker) {
  const at = src.indexOf(marker);
  if (at < 0) {
    return null;
  }
  let i = at + marker.length;
  while (i < src.length && src[i] !== "{" && src[i] !== "[") {
    i++;
  }
  if (i >= src.length) {
    return null;
  }
  const open = src[i];
  const close = open === "{" ? "}" : "]";
  let depth = 0;
  let inStr = false;
  let esc = false;
  const start = i;
  for (; i < src.length; i++) {
    const c = src[i];
    if (inStr) {
      if (esc) {
        esc = false;
      } else if (c === "\\") {
        esc = true;
      } else if (c === '"') {
        inStr = false;
      }
      continue;
    }
    if (c === '"') {
      inStr = true;
    } else if (c === open) {
      depth++;
    } else if (c === close) {
      depth--;
      if (depth === 0) {
        return src.slice(start, i + 1);
      }
    }
  }
  return null;
}

// iconMetadata is a JS object literal with unquoted PascalCase keys and flat
// string-valued entries: `Key:{title:"slug, kw, kw",category:"...",createdAt:"...",aliases:"..."}`.
// We parse it per-entry with a regex (entries have no nested braces), preserving
// source order — which is the order the decoded SVG-body array is indexed by.
function parseIconMetadata(literal) {
  const fieldStr = (body, name) => {
    const m = body.match(new RegExp(`${name}:"((?:[^"\\\\]|\\\\.)*)"`));
    return m?.[1]?.replace(ESCAPED_QUOTE_RE, '"') ?? null;
  };
  const entries = [];
  for (const match of literal.matchAll(ENTRY_RE)) {
    const body = match[2];
    const title = fieldStr(body, "title") || "";
    const aliases = fieldStr(body, "aliases") || title;
    // title/aliases are "slug, keyword, keyword" — first token is the slug.
    const tokens = aliases
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);
    const rawSlug = (title.split(",")[0] || "").trim();
    entries.push({
      key: match[1],
      rawSlug,
      keywords: tokens.slice(1),
      category: fieldStr(body, "category") || "",
      createdAt: fieldStr(body, "createdAt") || "",
    });
  }
  return entries;
}

// biome-ignore lint/complexity/noExcessiveCognitiveComplexity: discovery scans every chunk for three markers and validates each — clearest as one pass
async function discoverChunkData() {
  const html = await (await fetch(`${ORIGIN}/`)).text();
  const chunkPaths = [...html.matchAll(CHUNK_PATH_RE)].map((x) => x[0]);
  const unique = [...new Set(chunkPaths)];
  if (unique.length === 0) {
    fail(
      "No JS chunks found on centralicons.com homepage — site structure changed."
    );
  }

  let variantManifest = null;
  let variantXorKey = null;
  let iconEntries = null;
  const usedChunks = [];

  for (const cp of unique) {
    const text = await (await fetch(`${ORIGIN}${cp}`)).text();
    if (!variantXorKey && text.includes('"variantXorKey"')) {
      const lit = extractLiteralAfter(text, '"variantXorKey"');
      if (lit) {
        variantXorKey = JSON.parse(lit);
        usedChunks.push(cp);
      }
    }
    if (!variantManifest && text.includes('"variantManifest"')) {
      const lit = extractLiteralAfter(text, '"variantManifest"');
      if (lit) {
        variantManifest = JSON.parse(lit);
        usedChunks.push(cp);
      }
    }
    if (!iconEntries && text.includes('"iconMetadata"')) {
      const lit = extractLiteralAfter(text, '"iconMetadata"');
      if (lit) {
        iconEntries = parseIconMetadata(lit);
        usedChunks.push(cp);
      }
    }
    if (variantManifest && variantXorKey && iconEntries) {
      break;
    }
  }

  // Validate discovered values — abort loudly rather than guessing.
  if (
    !(
      variantXorKey &&
      Array.isArray(variantXorKey) &&
      variantXorKey.length === 16 &&
      variantXorKey.every((n) => Number.isInteger(n) && n >= 0 && n <= 255)
    )
  ) {
    fail("variantXorKey not found or malformed (expected 16 bytes).");
  }
  if (
    !(variantManifest?.[OUTLINE_VARIANT] && variantManifest?.[FILLED_VARIANT])
  ) {
    fail(`variantManifest missing expected variant keys (${OUTLINE_VARIANT}).`);
  }
  if (!(iconEntries && iconEntries.length > 0)) {
    fail("iconMetadata not found or empty.");
  }
  for (const v of OPTS.variants) {
    if (!variantManifest[v]) {
      fail(
        `Requested variant "${v}" not in manifest. Available: ${Object.keys(variantManifest).join(", ")}`
      );
    }
  }

  return {
    variantManifest,
    variantXorKey,
    iconEntries,
    usedChunks: [...new Set(usedChunks)],
  };
}

// ─── Decode a variant pack → array of inner-SVG bodies ──────────────
async function decodeVariant(variantKey, manifest, xorKey) {
  const url = `${ORIGIN}${manifest[variantKey]}`;
  const res = await fetch(url);
  if (!res.ok) {
    fail(`Failed to fetch variant pack ${variantKey}: HTTP ${res.status}`);
  }
  const buf = new Uint8Array(await res.arrayBuffer());
  const key = Uint8Array.from(xorKey);
  const xored = new Uint8Array(buf.length);
  for (let i = 0; i < buf.length; i++) {
    // biome-ignore lint/suspicious/noBitwiseOperators: XOR is the decryption itself
    xored[i] = buf[i] ^ key[i % key.length];
  }
  const stream = new Response(xored).body.pipeThrough(
    new DecompressionStream("gzip")
  );
  const arr = JSON.parse(await new Response(stream).text());
  if (!Array.isArray(arr)) {
    fail(`Decoded variant ${variantKey} is not an array.`);
  }
  return arr;
}

// Match the repo's (biome/ultracite) JSON style: 2-space indent, with string
// arrays inlined only when the resulting line fits biome's 80-col width
// (e.g. `"tags": ["a", "b"]`), otherwise left expanded.
const BIOME_LINE_WIDTH = 80;
function formatMetadata(obj) {
  const collapsed = JSON.stringify(obj, null, 2).replace(
    JSON_ARRAY_BLOCK_RE,
    (match, indent, key, inner) => {
      const inline = `${indent}${key}[${inner
        .split(JSON_ARRAY_ITEM_SEP_RE)
        .map((s) => s.trim())
        .join(", ")}]`;
      return inline.length <= BIOME_LINE_WIDTH ? inline : match;
    }
  );
  return `${collapsed}\n`;
}

function wrapSvg(body) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">\n${body}\n</svg>\n`;
}

function matchesOnly(name) {
  if (!OPTS.only) {
    return true;
  }
  if (OPTS.only.includes("*")) {
    const re = new RegExp(
      `^${OPTS.only.replace(GLOB_SPECIALS_RE, "\\$&").replace(GLOB_STAR_RE, ".*")}$`
    );
    return re.test(name);
  }
  return name.includes(OPTS.only);
}

function readJsonSafe(file, fallback) {
  try {
    return JSON.parse(fs.readFileSync(file, "utf8"));
  } catch {
    return fallback;
  }
}

// ─── Main ───────────────────────────────────────────────────────────
// biome-ignore lint/complexity/noExcessiveCognitiveComplexity: end-to-end scrape orchestration (discover, decode, diff, write) reads clearest as one flow
async function main() {
  console.log(`Discovering icon data from ${ORIGIN} …`);
  const { variantManifest, variantXorKey, iconEntries, usedChunks } =
    await discoverChunkData();
  console.log(
    `  ${iconEntries.length} icons, ${Object.keys(variantManifest).length} variants. Chunks: ${usedChunks.length}`
  );

  // Canonicalize slugs + detect collisions.
  const bySlug = new Map(); // canonical → entry index
  const collisions = [];
  iconEntries.forEach((e, idx) => {
    e.slug = canonicalizeName(e.rawSlug);
    if (!SLUG_RE.test(e.slug)) {
      fail(`Icon "${e.rawSlug}" canonicalizes to invalid slug "${e.slug}".`);
    }
    if (bySlug.has(e.slug)) {
      const prev = iconEntries[bySlug.get(e.slug)];
      collisions.push(`${e.slug}  ←  "${prev.rawSlug}" and "${e.rawSlug}"`);
    } else {
      bySlug.set(e.slug, idx);
    }
  });
  if (collisions.length) {
    fail(
      `Canonical-name collisions (resolve manually):\n  ${collisions.join("\n  ")}`
    );
  }

  // Decode requested variants.
  const decoded = {};
  for (const v of OPTS.variants) {
    console.log(`Decoding ${v} …`);
    const arr = await decodeVariant(v, variantManifest, variantXorKey);
    if (arr.length !== iconEntries.length) {
      fail(
        `Decode mismatch for ${v}: ${arr.length} bodies vs ${iconEntries.length} metadata entries.`
      );
    }
    decoded[v] = arr;
  }

  // Integrity spot-check: a known icon's decoded body matches what's on disk.
  if (decoded[OUTLINE_VARIANT]) {
    let overlap = 0;
    let aligned = 0;
    let malformed = 0;
    for (const [slug, idx] of bySlug) {
      const body = decoded[OUTLINE_VARIANT][idx];
      if (!body?.includes("<")) {
        malformed++;
      }
      const onDisk = readFileSafe(path.join(SVG_DIR, `${slug}.svg`));
      if (!onDisk) {
        continue;
      }
      overlap++;
      const d = onDisk.match(SVG_PATH_D_RE)?.[1];
      if (d && body.includes(d)) {
        aligned++;
      }
    }
    if (malformed > 0) {
      fail(`${malformed} decoded bodies are malformed (missing markup).`);
    }
    const rate = overlap ? Math.round((aligned / overlap) * 100) : 0;
    if (overlap > 50 && rate < 20) {
      fail(
        `Slug-to-body alignment looks wrong: only ${rate}% of ${overlap} overlapping icons match. Aborting before any write.`
      );
    }
    console.log(
      `  alignment: ${aligned}/${overlap} overlapping icons match exactly (${rate}%); rest are Central re-encodes`
    );
  }

  // Diff against disk + build write set.
  const centralSlugs = new Set([...bySlug.keys()].filter(matchesOnly));
  const ledger = new Set(readJsonSafe(LEDGER_PATH, []));
  const added = [];
  const changed = [];
  let metaScaffolded = 0;

  const writes = []; // {file, content}
  const metaWrites = []; // {file, content}

  for (const slug of centralSlugs) {
    const idx = bySlug.get(slug);
    const entry = iconEntries[idx];

    // Outline SVG — always write new; only overwrite existing under --resync.
    if (decoded[OUTLINE_VARIANT]) {
      const file = path.join(SVG_DIR, `${slug}.svg`);
      const content = wrapSvg(decoded[OUTLINE_VARIANT][idx]);
      const prev = readFileSafe(file);
      if (prev == null) {
        added.push(slug);
        writes.push({ file, content });
      } else if (prev !== content) {
        changed.push(slug);
        if (OPTS.resync) {
          writes.push({ file, content });
        }
      }
    }

    // Filled SVG — same policy.
    if (decoded[FILLED_VARIANT]) {
      const file = path.join(SVG_DIR, `${slug}-filled.svg`);
      const content = wrapSvg(decoded[FILLED_VARIANT][idx]);
      const prev = readFileSafe(file);
      if (prev == null || (prev !== content && OPTS.resync)) {
        writes.push({ file, content });
      }
    }

    // Metadata: scaffold when missing; touch existing only when a flag asks.
    const metaFile = path.join(DATA_DIR, `${slug}.json`);
    const existing = readJsonSafe(metaFile, null);
    if (!existing) {
      const content = formatMetadata({
        icon: slug,
        category: entry.category,
        tags: entry.keywords,
      });
      metaWrites.push({ file: metaFile, content });
      metaScaffolded++;
    } else if (OPTS.mergeTags || OPTS.overwriteCategory) {
      const tags = OPTS.mergeTags
        ? [...new Set([...(existing.tags || []), ...entry.keywords])]
        : existing.tags || [];
      const category = OPTS.overwriteCategory
        ? entry.category
        : (existing.category ?? entry.category);
      const content = formatMetadata({
        ...existing,
        icon: slug,
        category,
        tags,
      });
      if (readFileSafe(metaFile) !== content) {
        metaWrites.push({ file: metaFile, content });
      }
    }
  }

  // Removed = previously-Central icons no longer present (never touches
  // non-Central / brand / custom icons, which were never in the ledger).
  const removed = [...ledger].filter((slug) => !centralSlugs.has(slug));

  // Report.
  const report = {
    added: added.sort(),
    changed: changed.sort(),
    removed: removed.sort(),
    metaScaffolded,
    totalCentral: centralSlugs.size,
  };
  if (OPTS.json) {
    console.log(JSON.stringify(report, null, 2));
  } else {
    const changedNote = OPTS.resync
      ? "changed (resyncing)"
      : "changed (skipped — pass --resync to refresh geometry)";
    console.log(
      `\nDiff: ${added.length} added, ${changed.length} ${changedNote}, ${removed.length} removed, ${metaScaffolded} metadata scaffolded`
    );
    if (added.length) {
      console.log(
        `  + ${added.slice(0, 20).join(", ")}${added.length > 20 ? ` … (+${added.length - 20})` : ""}`
      );
    }
    if (removed.length) {
      console.log(
        `  - ${removed.join(", ")} ${OPTS.prune ? "(pruning)" : "(report only — pass --prune to delete)"}`
      );
    }
  }

  if (OPTS.dryRun) {
    console.log(
      `\nDry run — wrote nothing (${writes.length} SVGs + ${metaWrites.length} metadata files would change).`
    );
    return;
  }

  // Apply writes.
  fs.mkdirSync(SVG_DIR, { recursive: true });
  fs.mkdirSync(DATA_DIR, { recursive: true });
  for (const { file, content } of [...writes, ...metaWrites]) {
    fs.writeFileSync(file, content);
  }

  // Prune (opt-in) — only Central-owned icons; leaves brand/custom alone.
  if (OPTS.prune) {
    for (const slug of removed) {
      for (const f of [`${slug}.svg`, `${slug}-filled.svg`]) {
        const p = path.join(SVG_DIR, f);
        if (fs.existsSync(p)) {
          fs.unlinkSync(p);
        }
      }
      const mp = path.join(DATA_DIR, `${slug}.json`);
      if (fs.existsSync(mp)) {
        fs.unlinkSync(mp);
      }
    }
  }

  // Update ledger (Central-owned set) — keep removed entries unless pruned, so
  // a report-only removal stays tracked for next run.
  const nextLedger = OPTS.prune
    ? [...centralSlugs]
    : [...new Set([...centralSlugs, ...ledger])];
  fs.writeFileSync(
    LEDGER_PATH,
    `${JSON.stringify(nextLedger.sort(), null, 2)}\n`
  );

  // Provenance — hashes only, never the raw key or license.
  const provenance = {
    scrapedAt: new Date().toISOString(),
    origin: ORIGIN,
    chunkUrls: usedChunks.map((c) => `${ORIGIN}${c}`),
    xorKeyHash: crypto
      .createHash("sha256")
      .update(Uint8Array.from(variantXorKey))
      .digest("hex"),
    manifestHash: crypto
      .createHash("sha256")
      .update(JSON.stringify(variantManifest))
      .digest("hex"),
    iconCount: iconEntries.length,
    variantsScraped: OPTS.variants,
    fullVariantManifestKeys: Object.keys(variantManifest).sort(),
    licenseKeyPresent: Boolean(process.env.CENTRAL_LICENSE_KEY),
  };
  fs.writeFileSync(PROVENANCE_PATH, `${JSON.stringify(provenance, null, 2)}\n`);

  console.log(
    `\n✓ Wrote ${writes.length} SVGs, ${metaWrites.length} metadata files. Ledger + provenance updated.`
  );
}

function readFileSafe(file) {
  try {
    return fs.readFileSync(file, "utf8");
  } catch {
    return null;
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
