/**
 * The house-spec audit: what the set looks like, measured.
 *
 * Nothing in this repo had ever read a path. `validate-icons.mjs` checks slugs,
 * filled siblings and a `viewBox` substring; the two properties that actually
 * decide whether a set looks like one hand drew it — where the ink sits and
 * whether a recurring element is drawn the same way twice — went unmeasured, so
 * drift accumulated silently: ~120 off-spec stroke widths, 47 non-24 viewBoxes,
 * and the coin container drawn three different ways.
 *
 * The measuring is icon-forge's job, not this repo's. This script shells out to
 * `forge` and compares its JSON against a committed baseline. That is deliberate:
 * importing icon-forge's API would pull @ai-sdk/anthropic, ai, zod and sharp into
 * a package whose audit never calls a model.
 *
 * DELIBERATELY NOT IN CI. It compares absolute counts, so adding a normal icon
 * adds findings and reads as a regression; the only available response is to run
 * --update, which teaches nothing and costs a commit. A gate that fires on every
 * PR and is always answered the same way is worse than no gate. It would also put
 * a published copy of icon-forge on the critical path of every build, for a
 * measurement nobody is blocked on.
 *
 * So this is a tool you run when you want to know: before and after a
 * normalisation pass, or when a family starts looking wrong. The baseline is
 * there to diff against, not to gate on. If it ever does belong in CI, it needs
 * to compare per-icon rates rather than totals, so that adding an average icon is
 * neutral.
 *
 * Usage:
 *   node scripts/audit-icons.mjs              compare against the baseline
 *   node scripts/audit-icons.mjs --update     rewrite the baseline
 *   node scripts/audit-icons.mjs --json       machine-readable summary
 *
 * FORGE overrides the binary, for running against a local icon-forge checkout:
 *   FORGE="npx tsx ../../../icon-forge/src/cli.ts" node scripts/audit-icons.mjs
 */
import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const ROOT = path.join(import.meta.dirname, "..");
const SVG_DIR = path.join(ROOT, "icons-svg");
const BASELINE = path.join(ROOT, "audit-baseline.json");
const FORGE = process.env.FORGE ?? "npx --yes --package=icon-forge forge";

// The census only counts an element as recurring past this many icons. Fixed
// here rather than left to the default so the baseline stays comparable when
// icon-forge changes its default.
const MIN_ICONS = 4;

const forge = (args) => {
  // `lint` exits 1 when it finds errors, which is its contract and not a
  // failure of this script — the whole point is that errors currently exist.
  // stdout is the report either way; only an empty stdout means it really died.
  let stdout;
  try {
    stdout = execSync(`${FORGE} --output json ${args}`, {
      encoding: "utf-8",
      maxBuffer: 256 * 1024 * 1024,
      stdio: ["ignore", "pipe", "pipe"],
    });
  } catch (error) {
    stdout = error.stdout;
    if (!stdout?.trim()) {
      throw new Error(
        `forge ${args} produced no output.\n${error.stderr ?? error.message}\n\n` +
          `Is icon-forge installed? Set FORGE to point at a local checkout.`,
        { cause: error }
      );
    }
  }
  return JSON.parse(stdout);
};

/** The numbers the gate watches. Each one only ever goes down. */
const measure = () => {
  const lint = forge(`lint --dir "${SVG_DIR}"`);
  const census = forge(`elements --dir "${SVG_DIR}" --min ${MIN_ICONS}`);

  const bySeverity = {};
  for (const file of lint.files) {
    for (const issue of file.issues) {
      bySeverity[issue.rule] = (bySeverity[issue.rule] ?? 0) + 1;
    }
  }

  const disagreeing = census.elements.filter(
    (e) => !(e.consistentSize && e.consistentPlace)
  ).length;

  return {
    icons: lint.files.length,
    errors: lint.errors,
    warnings: lint.warnings,
    cohortSplits: lint.cohorts.length,
    rules: Object.fromEntries(
      Object.entries(bySeverity).toSorted(([a], [b]) => a.localeCompare(b))
    ),
    recurringElements: census.elements.length,
    disagreeingElements: disagreeing,
  };
};

/** Every metric here is a count of things wrong, so an increase is the
 *  regression and a decrease is the point. `icons` is the exception: it goes up
 *  when icons are added, which is not a regression. */
const COUNTS_WRONG = (key) => key !== "icons";

const compare = (baseline, current) => {
  const regressions = [];
  const improvements = [];
  const walk = (base, now, prefix = "") => {
    for (const [key, value] of Object.entries(now)) {
      const label = prefix + key;
      if (typeof value === "object") {
        walk(base?.[key] ?? {}, value, `${label}.`);
        continue;
      }
      const was = base?.[key] ?? 0;
      if (value === was || !COUNTS_WRONG(key)) {
        continue;
      }
      (value > was ? regressions : improvements).push({
        label,
        was,
        now: value,
      });
    }
  };
  walk(baseline, current);
  return { regressions, improvements };
};

const main = () => {
  const update = process.argv.includes("--update");
  const asJson = process.argv.includes("--json");
  const current = measure();

  if (update) {
    fs.writeFileSync(BASELINE, `${JSON.stringify(current, null, 2)}\n`);
    process.stdout.write(
      `Baseline written to ${path.relative(ROOT, BASELINE)}\n`
    );
    return;
  }

  if (!fs.existsSync(BASELINE)) {
    throw new Error(
      `No baseline at ${BASELINE}. Run with --update to create one.`
    );
  }

  const baseline = JSON.parse(fs.readFileSync(BASELINE, "utf-8"));
  const { regressions, improvements } = compare(baseline, current);

  if (asJson) {
    process.stdout.write(
      `${JSON.stringify({ current, baseline, regressions, improvements }, null, 2)}\n`
    );
  } else {
    process.stdout.write(
      `${current.icons} icons: ${current.errors} error(s), ${current.warnings} warning(s), ` +
        `${current.cohortSplits} cohort split(s), ` +
        `${current.disagreeingElements}/${current.recurringElements} recurring elements disagree\n`
    );
    for (const i of improvements) {
      process.stdout.write(`  improved  ${i.label}: ${i.was} -> ${i.now}\n`);
    }
    for (const r of regressions) {
      process.stderr.write(`  REGRESSED ${r.label}: ${r.was} -> ${r.now}\n`);
    }
  }

  if (regressions.length > 0) {
    process.stderr.write(
      `\n${regressions.length} metric(s) got worse than the baseline. Run --update once you have looked at them.\n`
    );
    process.exitCode = 1;
  }
};

main();
