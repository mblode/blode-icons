// Validates icons-data/*.json against the metadata schema. Dependency-free.
// Checks each file's shape, that `icon` matches the filename, that the category
// is empty (brand/custom icons) or one of the known categories, and that tags
// are unique non-empty strings. Also checks that metadata and outline SVGs cover
// each other exactly, and that _concepts.json gives every concept exactly one
// answer that resolves to a real icon. Exits non-zero on any error.
//
// Usage: node scripts/validate-icons-data.mts

import fs from "node:fs";
import path from "node:path";

const __dirname = import.meta.dirname;
const ROOT = path.join(__dirname, "..");
const DATA_DIR = path.join(ROOT, "icons-data");
const SVG_DIR = path.join(ROOT, "icons-svg");

const SLUG_RE = /^[a-z](?:[a-z0-9-]*[a-z0-9])?$/;
const CONCEPT_KEY_RE = /^\s*"([^"]+)"\s*:/gm;
const MAX_LISTED = 20;

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

/** Outline slugs, i.e. every SVG that is not the filled half of a pair. Filled
 *  icons share their outline's metadata record, so they are not counted here. */
function outlineSlugs(): string[] {
  return fs
    .readdirSync(SVG_DIR)
    .filter((f) => f.endsWith(".svg") && !f.endsWith("-filled.svg"))
    .map((f) => path.basename(f, ".svg"));
}

/** Metadata and art must cover each other exactly: an SVG with no record is
 *  invisible to search, and a record with no SVG names an icon that does not
 *  exist. Neither direction was detectable before this check. */
function checkCoverage(slugs: Set<string>, errors: string[]): void {
  const outlines = outlineSlugs();
  const outlineSet = new Set(outlines);

  const undocumented = outlines.filter((s) => !slugs.has(s)).toSorted();
  if (undocumented.length) {
    errors.push(
      `${undocumented.length} outline SVG(s) have no icons-data record: ${undocumented.slice(0, MAX_LISTED).join(", ")}${undocumented.length > MAX_LISTED ? ", …" : ""}`
    );
  }

  const orphaned = [...slugs].filter((s) => !outlineSet.has(s)).toSorted();
  if (orphaned.length) {
    errors.push(
      `${orphaned.length} icons-data record(s) have no outline SVG: ${orphaned.slice(0, MAX_LISTED).join(", ")}${orphaned.length > MAX_LISTED ? ", …" : ""}`
    );
  }
}

/** Each "what is the icon for X?" must have exactly one answer. Object keys give
 *  that structurally, but JSON.parse silently keeps the last of a duplicated
 *  key, so the raw text is scanned too — a second answer added by hand would
 *  otherwise disappear rather than fail. */
// biome-ignore lint/complexity/noExcessiveCognitiveComplexity: a flat sequence of independent checks over one small file
function checkConcepts(slugs: Set<string>, errors: string[]): number {
  const file = path.join(DATA_DIR, "_concepts.json");
  const raw = fs.readFileSync(file, "utf-8");
  const parsed: unknown = JSON.parse(raw);
  const concepts = isRecord(parsed) ? parsed.concepts : undefined;
  if (!isRecord(concepts)) {
    errors.push('_concepts.json: "concepts" must be an object.');
    return 0;
  }

  const seen = new Set<string>();
  for (const match of raw.matchAll(CONCEPT_KEY_RE)) {
    const key = match[1];
    if (seen.has(key) && key in concepts) {
      errors.push(
        `_concepts.json: concept "${key}" has more than one answer; a concept takes exactly one.`
      );
    }
    seen.add(key);
  }

  for (const [concept, target] of Object.entries(concepts)) {
    if (!SLUG_RE.test(concept)) {
      errors.push(`_concepts.json: concept "${concept}" is not a valid slug.`);
    }
    if (typeof target !== "string") {
      errors.push(
        `_concepts.json: concept "${concept}" must name a single icon slug, got ${JSON.stringify(target)}.`
      );
    } else if (!slugs.has(target)) {
      errors.push(
        `_concepts.json: concept "${concept}" points at "${target}", which is not an icon.`
      );
    }
  }
  return Object.keys(concepts).length;
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

  const slugs = new Set(files.map((f) => path.basename(f, ".json")));
  checkCoverage(slugs, errors);
  const conceptCount = checkConcepts(slugs, errors);

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
    `icons-data OK — ${files.length} files, ${categories.size} categories, ${conceptCount} concepts.`
  );
}

main();
