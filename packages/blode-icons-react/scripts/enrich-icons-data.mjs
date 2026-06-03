// Merges LLM-generated search keywords into icons-data/*.json. Idempotent and
// non-destructive: only touches icons that are still sparse (<= 1 tag), unions
// the new keywords with any existing curated tags, and never overwrites a
// hand-tagged icon. Reviewable as a normal git diff.
//
// Input: a JSON file (default scripts/.enrichment.json) — an array of
//   { "slug": "trash", "keywords": ["delete", "remove", "bin"] }
//
// Usage: node scripts/enrich-icons-data.mjs [path-to-enrichment.json] [--force]

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const DATA_DIR = path.join(ROOT, "icons-data");

const JSON_ARRAY_BLOCK_RE = /( *)("[\w-]+": )\[\n\s*([\s\S]*?)\n\s*\]/g;
const JSON_ARRAY_ITEM_SEP_RE = /,\s*\n\s*/;
const NON_WORD_RE = /[^a-z0-9]+/g;
const EDGE_DASH_RE = /^-+|-+$/g;
const BIOME_LINE_WIDTH = 80;

const argv = process.argv.slice(2);
const force = argv.includes("--force");
const inputPath =
  argv.find((a) => !a.startsWith("--")) ??
  path.join(__dirname, ".enrichment.json");

// Same JSON style as the scraper (short arrays inline, else expanded).
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

// Words already implied by the slug — no value re-adding them as tags.
function slugWords(slug) {
  return new Set(slug.split("-"));
}

function cleanKeyword(kw) {
  return String(kw)
    .toLowerCase()
    .trim()
    .replace(NON_WORD_RE, "-")
    .replace(EDGE_DASH_RE, "");
}

// biome-ignore lint/complexity/noExcessiveCognitiveComplexity: a flat per-icon merge with guards; clearest in one pass
function main() {
  if (!fs.existsSync(inputPath)) {
    console.error(`Enrichment input not found: ${inputPath}`);
    process.exit(1);
  }
  const enrichments = JSON.parse(fs.readFileSync(inputPath, "utf8"));
  if (!Array.isArray(enrichments)) {
    console.error("Enrichment input must be an array of { slug, keywords }.");
    process.exit(1);
  }

  let updated = 0;
  let skippedRich = 0;
  let missing = 0;
  let addedTags = 0;

  for (const { slug, keywords } of enrichments) {
    const file = path.join(DATA_DIR, `${slug}.json`);
    if (!fs.existsSync(file)) {
      missing++;
      continue;
    }
    const data = JSON.parse(fs.readFileSync(file, "utf8"));
    const existing = Array.isArray(data.tags) ? data.tags : [];

    // Idempotency guard: leave already-tagged icons alone unless forced.
    if (existing.length > 1 && !force) {
      skippedRich++;
      continue;
    }

    const blocked = slugWords(slug);
    const seen = new Set(existing.map((t) => t.toLowerCase()));
    const additions = [];
    for (const raw of keywords ?? []) {
      const kw = cleanKeyword(raw);
      if (!kw || blocked.has(kw) || seen.has(kw)) {
        continue;
      }
      seen.add(kw);
      additions.push(kw);
    }
    if (additions.length === 0) {
      continue;
    }

    const merged = [...existing, ...additions].slice(0, 10);
    const next = formatMetadata({ ...data, icon: slug, tags: merged });
    if (fs.readFileSync(file, "utf8") !== next) {
      fs.writeFileSync(file, next);
      updated++;
      addedTags += additions.length;
    }
  }

  console.log(
    `Enriched ${updated} icons (+${addedTags} tags). Skipped ${skippedRich} already-tagged, ${missing} missing.`
  );
}

main();
