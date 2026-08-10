/**
 * Score every Lucide → Blode pair in lucide-mapping.ts by how similar the two
 * icons actually look, and rewrite `hasMatch` from the result.
 *
 * Matching names is not evidence: the generator's fuzzy pass produced
 * `Rat → ReceiptionBellIcon`, and a name check cannot tell that apart from
 * `ArrowRight → ArrowRightIcon`. Both icon sets are 24x24 stroke art, so
 * rasterising the pair and comparing ink is a direct test of the only thing
 * that matters — does the user get the icon they asked for.
 *
 * Both SVGs render to a small greyscale bitmap, blur (tolerating a few px of
 * designer disagreement without tolerating a different drawing), then compare
 * as unit vectors. The threshold is calibrated against exact-name pairs, whose
 * scores are printed on every run so a drift is visible.
 *
 * Usage: node --experimental-strip-types scripts/verify-lucide-mapping.mjs [--apply]
 */
import fs from "node:fs";
import { createRequire } from "node:module";
import path from "node:path";
import { pathToFileURL } from "node:url";

import sharp from "sharp";

const __dirname = import.meta.dirname;
const packageRoot = path.join(__dirname, "..");
const mappingPath = path.join(__dirname, "lucide-mapping.ts");
const blodeSvgDir = path.join(packageRoot, "icons-svg");

const require = createRequire(import.meta.url);
const lucideSvgDir = path.join(
  path.dirname(require.resolve("lucide-static/package.json")),
  "icons"
);

/** Render size. Small enough to be fast, big enough to keep strokes distinct. */
const SIZE = 48;
/** Blur sigma — forgives a few px of stroke placement, not a different shape. */
const BLUR = 1.6;

/**
 * Blode is its own icon set, not a Lucide tracing, so a correct pair is usually
 * the same *idea* drawn differently: `Accessibility -> WheelchairIcon` scores
 * 0.69 and is right, while `BusFront -> ReceiptionBellIcon` scores 0.63 and is
 * nonsense. Exact-name pairs have a median of only ~0.69, so no single cutoff
 * separates "drawn differently" from "wrong icon".
 *
 * So each signal is used where it is actually strong:
 *  - A name a human curated (or an identical slug) is good positive evidence.
 *    Rendering only overrides it when the drawings are wildly unrelated.
 *  - A fuzzy guess is no evidence at all, so it needs the drawings to genuinely
 *    match before the package will export it.
 */
const VETO_SCORE = 0.45;
const RESCUE_SCORE = 0.82;

function pascalToKebab(name) {
  return name
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1-$2")
    .toLowerCase();
}

/** Alias → canonical, so an alias resolves to the SVG file Lucide ships. */
function loadAliasMap() {
  const declaration = fs.readFileSync(
    require.resolve("lucide-static/dist/lucide-static.d.ts"),
    "utf-8"
  );
  const block = declaration.match(/export \{([^}]*)\};?\s*$/m);
  const aliases = {};
  for (const entry of block[1].split(",")) {
    const pair = entry.trim().match(/^(\w+) as (\w+)$/);
    if (pair) {
      aliases[pair[2]] = pair[1];
    }
  }
  return aliases;
}

const renderCache = new Map();

/**
 * Rasterise an SVG to a normalised ink vector. `currentColor` never resolves
 * off-page, so it is pinned to black before rendering or every icon would be
 * uniformly blank and every comparison would score 1.
 */
async function inkVector(svgPath) {
  const cached = renderCache.get(svgPath);
  if (cached) {
    return cached;
  }
  const svg = fs
    .readFileSync(svgPath, "utf-8")
    .replaceAll("currentColor", "#000");

  const raw = await sharp(Buffer.from(svg), { density: 200 })
    .resize(SIZE, SIZE, { background: "#fff", fit: "contain" })
    .flatten({ background: "#fff" })
    .greyscale()
    .blur(BLUR)
    .raw()
    .toBuffer();

  // Ink = darkness. Normalise to a unit vector so stroke weight and coverage
  // differences do not dominate the comparison.
  const ink = new Float64Array(raw.length);
  let norm = 0;
  for (let i = 0; i < raw.length; i++) {
    const value = 255 - raw[i];
    ink[i] = value;
    norm += value * value;
  }
  norm = Math.sqrt(norm);
  if (norm > 0) {
    for (let i = 0; i < ink.length; i++) {
      ink[i] /= norm;
    }
  }
  renderCache.set(svgPath, ink);
  return ink;
}

function cosine(a, b) {
  let dot = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
  }
  return dot;
}

function percentile(sorted, p) {
  if (sorted.length === 0) {
    return Number.NaN;
  }
  const index = Math.min(
    sorted.length - 1,
    Math.max(0, Math.floor((p / 100) * sorted.length))
  );
  return sorted[index];
}

async function main() {
  const apply = process.argv.includes("--apply");
  const { mappings } = await import(pathToFileURL(mappingPath).href);
  const aliasToCanonical = loadAliasMap();

  const scored = [];
  let missing = 0;

  for (const entry of mappings) {
    const blodeSlug = pascalToKebab(entry.blodeName.replace(/Icon$/, ""));
    const blodePath = path.join(blodeSvgDir, `${blodeSlug}.svg`);

    // Aliases have no SVG of their own; Lucide ships the canonical drawing.
    const canonical = aliasToCanonical[entry.lucideName] ?? entry.lucideName;
    const lucidePath = path.join(
      lucideSvgDir,
      `${pascalToKebab(canonical)}.svg`
    );

    if (!(fs.existsSync(blodePath) && fs.existsSync(lucidePath))) {
      missing++;
      scored.push({ ...entry, score: null });
      continue;
    }

    const [a, b] = await Promise.all([
      inkVector(blodePath),
      inkVector(lucidePath),
    ]);
    scored.push({ ...entry, score: cosine(a, b) });
  }

  const withScore = scored.filter((entry) => entry.score !== null);
  const exactScores = withScore
    .filter((entry) => entry.match === "exact")
    .map((entry) => entry.score)
    .toSorted((x, y) => x - y);

  console.log(`Scored ${withScore.length} pairs (${missing} missing an SVG)`);
  console.log(
    `Exact-name pairs: p5=${percentile(exactScores, 5).toFixed(3)} p25=${percentile(exactScores, 25).toFixed(3)} median=${percentile(exactScores, 50).toFixed(3)}`
  );
  console.log(
    `Veto below ${VETO_SCORE} (named pairs), rescue at/above ${RESCUE_SCORE} (fuzzy guesses)\n`
  );

  const finalEntries = scored.map((entry) => {
    // No render means no evidence either way, so keep the name verdict.
    if (entry.score === null) {
      return { ...entry, hasMatch: entry.hasMatch };
    }
    return {
      ...entry,
      hasMatch: entry.hasMatch
        ? entry.score >= VETO_SCORE
        : entry.score >= RESCUE_SCORE,
    };
  });

  const exported = finalEntries.filter((entry) => entry.hasMatch);
  console.log(
    `\n${exported.length} of ${finalEntries.length} pairs export after visual verification`
  );

  const promoted = finalEntries.filter(
    (entry, i) => entry.hasMatch && !scored[i].hasMatch
  );
  const demoted = finalEntries.filter(
    (entry, i) => !entry.hasMatch && scored[i].hasMatch
  );

  console.log(
    `  +${promoted.length} rescued (fuzzy guess, but the drawings really match)`
  );
  for (const entry of promoted
    .toSorted((a, b) => b.score - a.score)
    .slice(0, 6)) {
    console.log(
      `      ${entry.lucideName} → ${entry.blodeName} (${entry.score.toFixed(2)})`
    );
  }
  console.log(
    `  -${demoted.length} vetoed (name said yes, the drawings are unrelated)`
  );
  for (const entry of demoted
    .toSorted((a, b) => a.score - b.score)
    .slice(0, 6)) {
    console.log(
      `      ${entry.lucideName} → ${entry.blodeName} (${entry.score.toFixed(2)}, ${entry.match})`
    );
  }

  if (!apply) {
    console.log("\nDry run. Pass --apply to rewrite lucide-mapping.ts.");
    return;
  }

  const body = finalEntries
    .map(
      (entry) => `  {
    blodeName: "${entry.blodeName}",
    category: "${entry.category.replaceAll('"', '\\"')}",
    hasMatch: ${entry.hasMatch},
    lucideName: "${entry.lucideName}",
    match: "${entry.match}",
    visualScore: ${entry.score === null ? "null" : Number(entry.score.toFixed(3))},
  },`
    )
    .join("\n");

  const header = `export interface IconMapping {
  blodeName: string;
  category: string;
  /** Whether the pair is exported. Set by the visual check, not the name. */
  hasMatch: boolean;
  isChanged?: boolean;
  lucideName: string;
  /** How the pair was proposed: exact | curated | existing | reordered | fuzzy | alias:<kind>. */
  match: string;
  /** Cosine similarity of the two rendered icons, 0-1. null when either SVG is missing. */
  visualScore: number | null;
}

// Generated by scripts/generate-lucide-mapping.mjs, then verified by
// scripts/verify-lucide-mapping.mjs — do not edit by hand.
// ${exported.length} of ${finalEntries.length} pairs export: both icons were rendered and
// compared, and a named pair is vetoed below ${VETO_SCORE} and a fuzzy
// guess is only exported at/above ${RESCUE_SCORE}.
`;

  fs.writeFileSync(
    mappingPath,
    `${header}export const mappings: IconMapping[] = [
${body}
];

export const categories = [...new Set(mappings.map((m) => m.category))];
`
  );
  console.log(`\nRewrote ${path.basename(mappingPath)}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
