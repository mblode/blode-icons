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

function main() {
  const t0 = performance.now();

  if (!fs.existsSync(libSrcDir)) {
    console.error(
      `ERROR: Library src/ not found at ${libSrcDir}. Run the library build first.`
    );
    process.exit(1);
  }

  console.log("Copying icons from library to docs...");

  copyDirectory(libSrcDir, docsTsxDir);
  console.log("  Copied src/ -> src/icons-tsx/");

  copyDirectory(libSvgDir, docsSvgDir);
  console.log("  Copied icons-svg/ -> src/icons-svg/");

  copyDirectory(libDataDir, docsDataDir);
  console.log("  Copied icons-data/ -> src/icons-data/");

  generateDocsIconsMetadata();

  const elapsed = ((performance.now() - t0) / 1000).toFixed(1);
  console.log(`\nDocs icon copy complete in ${elapsed}s`);
}

main();
