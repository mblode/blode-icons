import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = import.meta.dirname;
const DOCS_ROOT = path.join(__dirname, "..");
const LIB_ROOT = path.join(
  DOCS_ROOT,
  "..",
  "..",
  "packages",
  "blode-icons-react"
);

const libSrcDir = path.join(LIB_ROOT, "src");
const libSvgDir = path.join(LIB_ROOT, "icons-svg");
const libDataDir = path.join(LIB_ROOT, "icons-data");

const docsTsxDir = path.join(DOCS_ROOT, "src", "icons-tsx");
const docsSvgDir = path.join(DOCS_ROOT, "src", "icons-svg");
const docsDataDir = path.join(DOCS_ROOT, "src", "icons-data");
const docsMetadataPath = path.join(DOCS_ROOT, "src", "icons-metadata.json");
const docsDataMetadataPath = path.join(docsDataDir, "metadata.json");
const docsSearchIndexPath = path.join(
  DOCS_ROOT,
  "src",
  "icons-search-index.json"
);

function toComponentName(slug) {
  return `${slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("")}Icon`;
}

function copyDirectory(src, dest) {
  fs.rmSync(dest, { force: true, recursive: true });
  fs.cpSync(src, dest, { recursive: true });
}

function generateDocsIconsMetadata() {
  const files = fs
    .readdirSync(libDataDir)
    .filter((file) => file.endsWith(".json"))
    .toSorted();

  const metadata = files
    .map((file) => {
      const filePath = path.join(libDataDir, file);
      const parsed = JSON.parse(fs.readFileSync(filePath, "utf-8"));
      return {
        category: parsed.category || "",
        icon: parsed.icon || path.basename(file, ".json"),
        tags: Array.isArray(parsed.tags) ? parsed.tags : [],
      };
    })
    .toSorted((a, b) => a.icon.localeCompare(b.icon));

  fs.writeFileSync(docsMetadataPath, `${JSON.stringify(metadata, null, 2)}\n`);
  console.log(
    `Generated src/icons-metadata.json with ${metadata.length} entries`
  );

  const metadataByIcon = Object.fromEntries(
    metadata.map((entry) => [
      entry.icon,
      { category: entry.category, tags: entry.tags },
    ])
  );
  fs.writeFileSync(
    docsDataMetadataPath,
    `${JSON.stringify(metadataByIcon, null, 2)}\n`
  );
  console.log(
    `Generated src/icons-data/metadata.json with ${metadata.length} entries`
  );
}

const lucideMappingPath = path.join(LIB_ROOT, "scripts", "lucide-mapping.ts");

// `lucide-mapping.ts` is generated TypeScript and this script runs on bare
// node, so the entries are scraped rather than imported. Keep this regex in
// step with the emitter in blode-icons-react/scripts/generate-lucide-mapping.mjs.
const LUCIDE_ENTRY_REGEX =
  /\{\s*blodeName:\s*"([^"]+)",\s*category:\s*"[^"]*",\s*hasMatch:\s*true,\s*lucideName:\s*"([^"]+)",\s*\}/g;

/** Lucide aliases keyed by Blode component name, e.g. "SearchIcon" → ["Search"]. */
function loadLucideAliasesByComponent() {
  if (!fs.existsSync(lucideMappingPath)) {
    return new Map();
  }
  const src = fs.readFileSync(lucideMappingPath, "utf-8");
  /** @type {Map<string, string[]>} */
  const byComponent = new Map();
  for (const [, blodeName, lucideName] of src.matchAll(LUCIDE_ENTRY_REGEX)) {
    const list = byComponent.get(blodeName) ?? [];
    list.push(lucideName);
    byComponent.set(blodeName, list);
  }
  return byComponent;
}

// Build the prebuilt client search index — one document per base (outline)
// icon. Derived from icons-svg so it stays complete even when an icon lacks a
// metadata JSON. Drives both the weighted Fuse search and the grid (no live
// component imports needed on the client).
function generateSearchIndex() {
  const metaBySlug = new Map();
  for (const file of fs.readdirSync(libDataDir)) {
    if (!file.endsWith(".json") || file.startsWith("_")) {
      continue;
    }
    const parsed = JSON.parse(
      fs.readFileSync(path.join(libDataDir, file), "utf-8")
    );
    metaBySlug.set(path.basename(file, ".json"), parsed);
  }

  const svgNames = new Set(
    fs
      .readdirSync(libSvgDir)
      .filter((f) => f.endsWith(".svg"))
      .map((f) => path.basename(f, ".svg"))
  );
  const baseSlugs = [...svgNames]
    .filter((n) => !n.endsWith("-filled"))
    .toSorted();
  const lucideByComponent = loadLucideAliasesByComponent();
  /** @type {Map<string, string[]>} */
  const lucideBySlug = new Map();
  for (const [blodeName, aliases] of lucideByComponent) {
    const slug = blodeName
      .replace(/Icon$/, "")
      .replaceAll(/([a-z0-9])([A-Z])/g, "$1-$2")
      .replaceAll(/([A-Z])([A-Z][a-z])/g, "$1-$2")
      .toLowerCase();
    const existing = lucideBySlug.get(slug) ?? [];
    lucideBySlug.set(slug, [...new Set([...existing, ...aliases])].toSorted());
  }

  const docs = baseSlugs.map((slug) => {
    const meta = metaBySlug.get(slug) ?? {};
    const name = toComponentName(slug);
    const slugAliases =
      lucideBySlug.get(slug) ??
      lucideBySlug.get(
        // component→slug conversion can disagree for digits; also try name key
        name
          .replace(/Icon$/, "")
          .replaceAll(/([a-z0-9])([A-Z])/g, "$1-$2")
          .toLowerCase()
      ) ??
      [];
    // An exact component-name hit is authoritative; the slug lookups above are
    // heuristics for names the round-trip mangles.
    return {
      category: meta.category || "",
      hasFilled: svgNames.has(`${slug}-filled`),
      lucideAliases: [
        ...new Set([...slugAliases, ...(lucideByComponent.get(name) ?? [])]),
      ].toSorted(),
      name,
      slug,
      tags: Array.isArray(meta.tags) ? meta.tags : [],
      title: slug.replaceAll(/-/g, " "),
    };
  });

  fs.writeFileSync(docsSearchIndexPath, `${JSON.stringify(docs)}\n`);
  console.log(
    `Generated src/icons-search-index.json with ${docs.length} icons`
  );
}

function main() {
  const t0 = performance.now();

  if (!fs.existsSync(libSrcDir)) {
    console.error(
      `ERROR: Library src/ not found at ${libSrcDir}. Run the library build first.`
    );
    process.exit(1);
  }

  // Gate: never build docs (or its search index) on invalid metadata.
  execFileSync(
    "node",
    [path.join(LIB_ROOT, "scripts", "validate-icons-data.mjs")],
    { stdio: "inherit" }
  );

  console.log("Copying icons from library to docs...");

  copyDirectory(libSrcDir, docsTsxDir);
  console.log("  Copied src/ -> src/icons-tsx/");

  copyDirectory(libSvgDir, docsSvgDir);
  console.log("  Copied icons-svg/ -> src/icons-svg/");

  copyDirectory(libDataDir, docsDataDir);
  console.log("  Copied icons-data/ -> src/icons-data/");

  generateDocsIconsMetadata();
  generateSearchIndex();

  // JSON.stringify(_, null, 2) puts every array element on its own line, but
  // oxfmt keeps short arrays inline, so the generated files disagreed with
  // their committed shape: regenerating expanded ~2000 `tags` arrays and
  // showed a ~12k-line diff that was byte-identical once parsed. Formatting
  // the output here means what the generator writes is already what the
  // formatter wants, so a rebuild leaves a clean tree. The search index is
  // excluded in oxfmt.config.ts, so it is deliberately not passed.
  try {
    execFileSync("npx", ["oxfmt", docsMetadataPath, docsDataMetadataPath], {
      stdio: "inherit",
    });
    console.log("  Formatted generated JSON");
  } catch {
    // oxfmt may fail on older Node (TS config requires >=22.18). The JSON is
    // still valid; pre-commit formatting will normalize when available.
    console.warn(
      "  Skipping oxfmt (formatter unavailable in this environment)"
    );
  }

  const elapsed = ((performance.now() - t0) / 1000).toFixed(1);
  console.log(`\nDocs icon copy complete in ${elapsed}s`);
}

main();
