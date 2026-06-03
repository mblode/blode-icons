// Validates the icons-svg/ tree before the build. Hard-fails on anything that
// would break the generated package (bad slug, malformed SVG, a filled variant
// with no outline sibling, or two slugs that collide on the same component
// name). Cosmetic issues (non-24 viewBox, stray colors) are warnings so the
// existing brand-icon outliers don't block builds.
//
// Usage: node scripts/validate-icons.mjs   (exit 1 on any error)

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const SVG_DIR = path.join(ROOT, "icons-svg");

const SLUG_RE = /^[a-z][a-z0-9-]*$/;
const FILLED_SUFFIX = "-filled";
const HARDCODED_COLOR_RE = /(?:fill|stroke)="(?:#|black)/i;

function toComponentName(slug) {
  return `${slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("")}Icon`;
}

// biome-ignore lint/complexity/noExcessiveCognitiveComplexity: a flat sequence of independent per-icon checks; splitting would scatter the validation
function main() {
  const files = fs.readdirSync(SVG_DIR).filter((f) => f.endsWith(".svg"));
  const slugs = files.map((f) => path.basename(f, ".svg"));
  const slugSet = new Set(slugs);

  const errors = [];
  const warnings = [];
  const componentToSlugs = new Map();

  for (const slug of slugs) {
    const base = slug.endsWith(FILLED_SUFFIX)
      ? slug.slice(0, -FILLED_SUFFIX.length)
      : slug;

    if (!SLUG_RE.test(slug)) {
      errors.push(`${slug}: invalid slug (must match ${SLUG_RE}).`);
    }

    // Every filled variant needs an outline sibling.
    if (slug.endsWith(FILLED_SUFFIX) && !slugSet.has(base)) {
      errors.push(`${slug}: filled variant has no outline sibling "${base}".`);
    }

    // Track component-name collisions (e.g. "eye-open" vs "eyeopen").
    const component = toComponentName(slug);
    if (componentToSlugs.has(component)) {
      componentToSlugs.get(component).push(slug);
    } else {
      componentToSlugs.set(component, [slug]);
    }

    const svg = fs.readFileSync(path.join(SVG_DIR, `${slug}.svg`), "utf8");
    if (!(svg.includes("<svg") && svg.includes("viewBox"))) {
      errors.push(`${slug}: malformed SVG (missing <svg> or viewBox).`);
    }
    if (!svg.includes('viewBox="0 0 24 24"')) {
      warnings.push(`${slug}: non-standard viewBox.`);
    }
    if (HARDCODED_COLOR_RE.test(svg)) {
      warnings.push(`${slug}: hardcoded color (expected currentColor).`);
    }
  }

  for (const [component, owners] of componentToSlugs) {
    if (owners.length > 1) {
      errors.push(
        `Component-name collision "${component}" from: ${owners.join(", ")}`
      );
    }
  }

  if (warnings.length) {
    console.log(
      `Validate: ${warnings.length} warning(s) (non-blocking) — e.g. ${warnings
        .slice(0, 3)
        .map((w) => w.split(":")[0])
        .join(", ")}`
    );
  }
  if (errors.length) {
    console.error(`\nValidate FAILED — ${errors.length} error(s):`);
    for (const e of errors.slice(0, 50)) {
      console.error(`  ✗ ${e}`);
    }
    process.exit(1);
  }
  console.log(
    `Validate OK — ${slugs.length} SVGs, ${componentToSlugs.size} unique component names.`
  );
}

main();
