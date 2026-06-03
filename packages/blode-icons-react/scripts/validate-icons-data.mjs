// Validates icons-data/*.json against the metadata schema. Dependency-free.
// Checks each file's shape, that `icon` matches the filename, that the category
// is empty (brand/custom icons) or one of the known categories, and that tags
// are unique non-empty strings. Exits non-zero on any error.
//
// Usage: node scripts/validate-icons-data.mjs

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const DATA_DIR = path.join(ROOT, "icons-data");

const SLUG_RE = /^[a-z][a-z0-9-]*$/;

// biome-ignore lint/complexity/noExcessiveCognitiveComplexity: a flat sequence of independent per-file checks
function main() {
  const categories = new Set(
    JSON.parse(fs.readFileSync(path.join(DATA_DIR, "_categories.json"), "utf8"))
      .categories
  );

  const files = fs
    .readdirSync(DATA_DIR)
    .filter((f) => f.endsWith(".json") && !f.startsWith("_"));

  const errors = [];
  for (const file of files) {
    const slug = path.basename(file, ".json");
    const where = `${file}`;
    let data;
    try {
      data = JSON.parse(fs.readFileSync(path.join(DATA_DIR, file), "utf8"));
    } catch (e) {
      errors.push(`${where}: invalid JSON (${e.message})`);
      continue;
    }

    if (data.icon !== slug) {
      errors.push(`${where}: "icon" is "${data.icon}", expected "${slug}".`);
    }
    if (!SLUG_RE.test(slug)) {
      errors.push(`${where}: filename is not a valid slug.`);
    }
    if (typeof data.category !== "string") {
      errors.push(`${where}: "category" must be a string.`);
    } else if (data.category !== "" && !categories.has(data.category)) {
      errors.push(
        `${where}: unknown category "${data.category}" (add it to _categories.json if intended).`
      );
    }
    if (Array.isArray(data.tags)) {
      const seen = new Set();
      for (const tag of data.tags) {
        if (typeof tag !== "string" || tag.trim() === "") {
          errors.push(`${where}: tags must be non-empty strings.`);
        } else if (seen.has(tag)) {
          errors.push(`${where}: duplicate tag "${tag}".`);
        }
        seen.add(tag);
      }
    } else {
      errors.push(`${where}: "tags" must be an array.`);
    }
  }

  if (errors.length) {
    console.error(
      `\nicons-data validation FAILED — ${errors.length} error(s):`
    );
    for (const e of errors.slice(0, 50)) {
      console.error(`  ✗ ${e}`);
    }
    process.exit(1);
  }
  console.log(
    `icons-data OK — ${files.length} files, ${categories.size} categories.`
  );
}

main();
