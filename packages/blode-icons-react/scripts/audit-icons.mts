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
 *   node scripts/audit-icons.mts              compare against the baseline
 *   node scripts/audit-icons.mts --update     rewrite the baseline
 *   node scripts/audit-icons.mts --json       machine-readable summary
 *
 * FORGE overrides the binary, for running against a local icon-forge checkout:
 *   FORGE="npx tsx ../../../icon-forge/src/cli.ts" node scripts/audit-icons.mts
 */
import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

/** What `forge lint --output json` returns. Only the fields this script reads. */
interface LintReport {
  cohorts: unknown[];
  errors: number;
  files: { file: string; issues: { rule: string; severity: string }[] }[];
  warnings: number;
}

/** What `forge elements --output json` returns. */
interface CensusReport {
  elements: { consistentPlace: boolean; consistentSize: boolean }[];
}

/** The numbers the baseline holds. Every one is a count of things wrong except
 *  `icons`, which is why `compare` has to treat that key differently. */
interface Metrics {
  cohortSplits: number;
  disagreeingElements: number;
  errors: number;
  icons: number;
  recurringElements: number;
  rules: Record<string, number>;
  warnings: number;
}

interface Delta {
  label: string;
  now: number;
  was: number;
}

const ROOT = path.join(import.meta.dirname, "..");
const SVG_DIR = path.join(ROOT, "icons-svg");
const BASELINE = path.join(ROOT, "audit-baseline.json");
const FORGE = process.env.FORGE ?? "npx --yes --package=icon-forge forge";

// The census only counts an element as recurring past this many icons. Fixed
// here rather than left to the default so the baseline stays comparable when
// icon-forge changes its default.
const MIN_ICONS = 4;

const forge = <T,>(args: string): T => {
  // `lint` exits 1 when it finds errors, which is its contract and not a
  // failure of this script — the whole point is that errors currently exist.
  // stdout is the report either way; only an empty stdout means it really died.
  let stdout: string | undefined;
  try {
    stdout = execSync(`${FORGE} --output json ${args}`, {
      encoding: "utf-8",
      maxBuffer: 256 * 1024 * 1024,
      stdio: ["ignore", "pipe", "pipe"],
    });
  } catch (error) {
    const failure = error as {
      message?: string;
      stderr?: string;
      stdout?: string;
    };
    stdout = failure.stdout;
    if (!stdout?.trim()) {
      throw new Error(
        `forge ${args} produced no output.\n${failure.stderr ?? failure.message}\n\n` +
          `Is icon-forge installed? Set FORGE to point at a local checkout.`,
        { cause: error }
      );
    }
  }
  return JSON.parse(stdout) as T;
};

/** The numbers the gate watches. Each one only ever goes down. */
const measure = (): Metrics => {
  const lint = forge<LintReport>(`lint --dir "${SVG_DIR}"`);
  const census = forge<CensusReport>(
    `elements --dir "${SVG_DIR}" --min ${MIN_ICONS}`
  );

  const bySeverity: Record<string, number> = {};
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
const COUNTS_WRONG = (key: string): boolean => key !== "icons";

const compare = (
  baseline: Metrics,
  current: Metrics
): { improvements: Delta[]; regressions: Delta[] } => {
  const regressions: Delta[] = [];
  const improvements: Delta[] = [];
  const walk = (
    base: Record<string, unknown>,
    now: Record<string, unknown>,
    prefix = ""
  ): void => {
    for (const [key, value] of Object.entries(now)) {
      const label = prefix + key;
      if (typeof value === "object" && value !== null) {
        walk(
          (base?.[key] as Record<string, unknown>) ?? {},
          value as Record<string, unknown>,
          `${label}.`
        );
        continue;
      }
      if (typeof value !== "number") {
        continue;
      }
      const was = (base?.[key] as number) ?? 0;
      if (value === was || !COUNTS_WRONG(key)) {
        continue;
      }
      (value > was ? regressions : improvements).push({
        label,
        now: value,
        was,
      });
    }
  };
  walk(
    baseline as unknown as Record<string, unknown>,
    current as unknown as Record<string, unknown>
  );
  return { regressions, improvements };
};

const main = (): void => {
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

  const baseline = JSON.parse(fs.readFileSync(BASELINE, "utf-8")) as Metrics;
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
