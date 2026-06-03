import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
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
  fs.rmSync(dest, { recursive: true, force: true });
  fs.cpSync(src, dest, { recursive: true });
}

function generateDocsIconsMetadata() {
  const files = fs
    .readdirSync(libDataDir)
    .filter((file) => file.endsWith(".json"))
    .sort();

  const metadata = files
    .map((file) => {
      const filePath = path.join(libDataDir, file);
      const parsed = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return {
        icon: parsed.icon || path.basename(file, ".json"),
        category: parsed.category || "",
        tags: Array.isArray(parsed.tags) ? parsed.tags : [],
      };
    })
    .sort((a, b) => a.icon.localeCompare(b.icon));

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
      fs.readFileSync(path.join(libDataDir, file), "utf8")
    );
    metaBySlug.set(path.basename(file, ".json"), parsed);
  }

  const svgNames = new Set(
    fs
      .readdirSync(libSvgDir)
      .filter((f) => f.endsWith(".svg"))
      .map((f) => path.basename(f, ".svg"))
  );
  const baseSlugs = [...svgNames].filter((n) => !n.endsWith("-filled")).sort();

  const docs = baseSlugs.map((slug) => {
    const meta = metaBySlug.get(slug) ?? {};
    return {
      name: toComponentName(slug),
      slug,
      title: slug.replace(/-/g, " "),
      category: meta.category || "",
      tags: Array.isArray(meta.tags) ? meta.tags : [],
      hasFilled: svgNames.has(`${slug}-filled`),
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

  const elapsed = ((performance.now() - t0) / 1000).toFixed(1);
  console.log(`\nDocs icon copy complete in ${elapsed}s`);
}

main();
