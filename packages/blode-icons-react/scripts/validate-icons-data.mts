// Validates icons-data/*.json against the metadata schema. Dependency-free.
// Checks each file's shape, that `icon` matches the filename, that the category
// is empty (brand/custom icons) or one of the known categories, and that tags
// are unique non-empty strings. Exits non-zero on any error.
//
// Usage: node scripts/validate-icons-data.mts

import fs from "node:fs";
import path from "node:path";

const __dirname = import.meta.dirname;
const ROOT = path.join(__dirname, "..");
const DATA_DIR = path.join(ROOT, "icons-data");

const SLUG_RE = /^[a-z][a-z0-9-]*$/;

/** Metadata files are user-authored, so nothing about their shape is assumed
 *  until it is checked; every read goes through `unknown`. */
function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function loadCategories(): Set<string> {
  const file = path.join(DATA_DIR, "_categories.json");
  const parsed: unknown = JSON.parse(fs.readFileSync(file, "utf-8"));
  const categories = isRecord(parsed) ? parsed.categories : undefined;
  if (
    !(
      Array.isArray(categories) &&
      categories.every((c) => typeof c === "string")
    )
  ) {
    throw new Error(`${file}: "categories" must be an array of strings.`);
  }
  return new Set(categories);
}

// biome-ignore lint/complexity/noExcessiveCognitiveComplexity: a flat sequence of independent per-file checks
function main(): void {
  const categories = loadCategories();

  const files = fs
    .readdirSync(DATA_DIR)
    .filter((f) => f.endsWith(".json") && !f.startsWith("_"));

  const errors: string[] = [];
  for (const file of files) {
    const slug = path.basename(file, ".json");
    const where = `${file}`;
    let data: unknown;
    try {
      data = JSON.parse(fs.readFileSync(path.join(DATA_DIR, file), "utf-8"));
    } catch (error) {
      errors.push(
        `${where}: invalid JSON (${error instanceof Error ? error.message : String(error)})`
      );
      continue;
    }

    if (!isRecord(data)) {
      errors.push(`${where}: must be a JSON object.`);
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
      const seen = new Set<unknown>();
      for (const tag of data.tags as unknown[]) {
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
