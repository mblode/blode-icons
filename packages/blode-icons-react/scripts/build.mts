import { execFileSync } from "node:child_process";
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

import type { Config } from "@svgr/core";
import { transform } from "@svgr/core";

const __dirname = import.meta.dirname;
const ROOT = path.join(__dirname, "..");

const svgDir = path.join(ROOT, "icons-svg");
const _dataDir = path.join(ROOT, "icons-data");
const srcDir = path.join(ROOT, "src");
const distDir = path.join(ROOT, "dist");
const manifestPath = path.join(ROOT, ".cache-manifest.json");
const mappingFile = path.join(__dirname, "lucide-mapping.ts");
const ICON_SUFFIX_RE = /Icon$/;

// CLI flags
const args = process.argv.slice(2);
const force = args.includes("--force");
const filterArg = args.find((a) => a.startsWith("--filter="));
const filterPattern = filterArg ? (filterArg.split("=")[1] ?? null) : null;

/** The cache manifest: icon slug → hash of its SVG plus the SVGR config. */
type Manifest = Record<string, string>;

/** One SVG's trip through SVGR. The failed arm carries no hash, so the manifest
 *  cannot be written from a result that never produced a component. */
type IconResult =
  | { cached: boolean; hash: string; iconName: string; ok: true }
  | { error: string; iconName: string; ok: false };

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function errorMessage(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}

// Load SVGO config. It is a hand-edited JSON file, so it is checked for being an
// object and then handed to SVGR, which validates the rest of it.
const rawSvgoConfig: unknown = JSON.parse(
  fs.readFileSync(path.join(ROOT, "svgo.json"), "utf-8")
);
if (!isRecord(rawSvgoConfig)) {
  throw new Error(`${path.join(ROOT, "svgo.json")}: expected a JSON object.`);
}
const svgoConfig = rawSvgoConfig as Config["svgoConfig"];

// SVGR options — hash includes config so cache busts on config changes
const svgrConfig: Config = {
  plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
  ref: true,
  svgoConfig,
  typescript: true,
};
const FORMAT_VERSION = "4"; // bump when individual icon output format changes
const configHash = crypto
  .createHash("md5")
  .update(JSON.stringify(svgrConfig) + FORMAT_VERSION)
  .digest("hex");

function stripRedundantCurrentColorStyles(code: string): string {
  return code
    .replaceAll(
      /\sstyle=\{\{\s*fill:\s*"currentColor",\s*fillOpacity:\s*1,\s*stroke:\s*"currentColor",\s*strokeOpacity:\s*1\s*\}\}/g,
      ""
    )
    .replaceAll(
      /\sstyle=\{\{\s*fill:\s*"currentColor",\s*fillOpacity:\s*1\s*\}\}/g,
      ""
    )
    .replaceAll(
      /\sstyle=\{\{\s*stroke:\s*"currentColor",\s*strokeOpacity:\s*1\s*\}\}/g,
      ""
    );
}

/** Every stroked child element of an icon, as an "effective stroke width":
 *  the number it hardcodes, or `inherit` when it takes the root's. */
const CHILD_ELEMENT_RE =
  /<(?:path|circle|rect|line|ellipse|polyline|polygon|g)\b([^>]*?)\/?>/g;
const STROKE_WIDTH_ATTR_RE = /\sstrokeWidth=\{([\d.]+)\}/g;
const HAS_STROKE_WIDTH_RE = /strokeWidth=/;
const STROKE_NONE_RE = /\sstroke="none"/;
const HAS_STROKE_RE = /\sstroke="/;
const ROOT_STROKED_RE = /\sstroke="(?!none)/;
const SVG_OPEN_TAG_RE = /<svg\b([^>]*)>/;
const BASE_STROKE_WIDTH = "2";

/**
 * Let the svg-level `strokeWidth` prop reach the artwork.
 *
 * SVGR copies every `stroke-width` off the source SVG onto the children, and a
 * child presentation attribute beats the one inherited from `<svg>`, so the
 * prop `createLucideIcon` puts on the root is dead on arrival. Removing the
 * child attributes lets it inherit.
 *
 * The strip is per icon and all-or-nothing, never per attribute. Some icons
 * thin an interior stroke below the 2px base so it does not clog beside a
 * container (see DESIGN.md, "the 1.8 tier"). Stripping the 2s while leaving a
 * hardcoded 1.8 behind would, at `strokeWidth={1}`, render the thinned stroke
 * *thicker* than the one it was thinning — inverting the optical adjustment.
 *
 * So an icon is only stripped when every stroked child agrees on one width and
 * that width is the 2px base:
 *  - disagreeing widths: an optical adjustment, left hardcoded.
 *  - a stroked child with no width of its own: it already tracks the prop, so
 *    the icon's widths disagree the moment the prop moves off 2.
 *  - a uniform width that is not 2: the whole icon is drawn off-base, and
 *    stripping would retune it at default props.
 */
function stripUniformChildStrokeWidth(code: string): string {
  const rootMatch = code.match(SVG_OPEN_TAG_RE);
  if (!rootMatch) {
    return code;
  }
  const rootAttrs = rootMatch[1];
  const childrenStart = (rootMatch.index ?? 0) + rootMatch[0].length;
  const children = code.slice(childrenStart);

  const widths = new Set(
    [...children.matchAll(STROKE_WIDTH_ATTR_RE)].map((m) => m[1])
  );
  if (widths.size !== 1 || !widths.has(BASE_STROKE_WIDTH)) {
    return code;
  }

  const rootIsStroked = ROOT_STROKED_RE.test(rootAttrs);
  for (const [, attrs] of children.matchAll(CHILD_ELEMENT_RE)) {
    if (HAS_STROKE_WIDTH_RE.test(attrs) || STROKE_NONE_RE.test(attrs)) {
      continue;
    }
    if (HAS_STROKE_RE.test(attrs) || rootIsStroked) {
      return code; // a child already tracking the prop: widths would diverge.
    }
  }

  return (
    code.slice(0, childrenStart) + children.replaceAll(STROKE_WIDTH_ATTR_RE, "")
  );
}

function toComponentName(str: string): string {
  return `${str
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("")}Icon`;
}

function matchesFilter(name: string): boolean {
  if (!filterPattern) {
    return true;
  }
  if (filterPattern.includes("*")) {
    const escaped = filterPattern.replaceAll(/[-/\\^$+?.()|[\]{}]/g, "\\$&");
    const regex = new RegExp(`^${escaped.replaceAll("\\*", ".*")}$`);
    return regex.test(name);
  }
  return name.includes(filterPattern);
}

function loadManifest(): Manifest {
  let parsed: unknown;
  try {
    parsed = JSON.parse(fs.readFileSync(manifestPath, "utf-8"));
  } catch {
    return {};
  }
  if (!isRecord(parsed)) {
    return {};
  }
  // A hand-mangled manifest must not smuggle non-hash values into the next one.
  const manifest: Manifest = {};
  for (const [key, value] of Object.entries(parsed)) {
    if (typeof value === "string") {
      manifest[key] = value;
    }
  }
  return manifest;
}

// ─── Step 0: Write support files that src/ needs but aren't generated ─
function generateSupportFiles(): void {
  fs.mkdirSync(srcDir, { recursive: true });

  fs.writeFileSync(
    path.join(srcDir, "lucide-types.ts"),
    `import type {
  ForwardRefExoticComponent,
  RefAttributes,
  SVGProps,
} from 'react'

/**
 * Props accepted by icon components.
 * Compatible with the lucide-react LucideProps interface.
 */
export interface LucideProps extends SVGProps<SVGSVGElement> {
  /**
   * When true, stroke width scales with \`size\` so icons look consistent
   * at any size (lucide-react compatible).
   */
  absoluteStrokeWidth?: boolean
  /** Sets both width and height. Default: 24 */
  size?: string | number
}

/**
 * The type of an icon component.
 * Compatible with the lucide-react LucideIcon type.
 */
export type LucideIcon = ForwardRefExoticComponent<
  Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
>
`
  );

  fs.writeFileSync(
    path.join(srcDir, "create-lucide-icon.ts"),
    `import * as React from 'react'
import type { LucideIcon, LucideProps } from './lucide-types'

/**
 * Wraps an icon component so it accepts lucide-compatible props
 * (size, color, strokeWidth, absoluteStrokeWidth) and supports forwardRef.
 */
export function createLucideIcon(
  name: string,
  IconComponent: React.ForwardRefExoticComponent<
    React.SVGProps<SVGSVGElement> & React.RefAttributes<SVGSVGElement>
  >,
): LucideIcon {
  const WrappedIcon = React.forwardRef<SVGSVGElement, LucideProps>(
    (
      {
        absoluteStrokeWidth = false,
        color = 'currentColor',
        size = 24,
        strokeWidth = 2,
        ...rest
      },
      ref,
    ) => {
      const numericSize = Number(size)
      const numericStroke = Number(strokeWidth)
      const calculatedStrokeWidth =
        absoluteStrokeWidth &&
        Number.isFinite(numericSize) &&
        numericSize > 0 &&
        Number.isFinite(numericStroke)
          ? (numericStroke * 24) / numericSize
          : strokeWidth

      return React.createElement(IconComponent, {
        ref,
        width: size,
        height: size,
        strokeWidth: calculatedStrokeWidth,
        color,
        ...rest,
      })
    },
  )

  WrappedIcon.displayName = name
  return WrappedIcon
}
`
  );

  fs.writeFileSync(
    path.join(srcDir, "index.ts"),
    `export * from './all-icons'
`
  );

  fs.writeFileSync(
    path.join(srcDir, "dynamic.tsx"),
    `'use client'

import type { ReactNode } from 'react'
import { createElement, forwardRef, useEffect, useState } from 'react'
import type { LucideIcon, LucideProps } from './lucide-types'
import dynamicIconImports from './dynamicIconImports'

export type IconName = keyof typeof dynamicIconImports

interface DynamicIconProps extends LucideProps {
  name: IconName
  fallback?: ReactNode
}

const DynamicIcon = forwardRef<SVGSVGElement, DynamicIconProps>(
  ({ name, fallback = null, ...props }, ref) => {
    const [LoadedIcon, setLoadedIcon] = useState<LucideIcon | null>(null)

    useEffect(() => {
      if (!(name in dynamicIconImports)) {
        console.error(
          \`[blode-icons-react]: Icon "\${String(name)}" not found\`,
        )
        return
      }
      dynamicIconImports[name as keyof typeof dynamicIconImports]()
        .then((mod) => setLoadedIcon(() => mod.default))
        .catch(console.error)
    }, [name])

    if (!LoadedIcon) {
      return fallback
    }

    return createElement(LoadedIcon, { ref, ...props })
  },
)

DynamicIcon.displayName = 'DynamicIcon'
export { DynamicIcon }
export default DynamicIcon
`
  );
}

// ─── Step 1: Generate icon components from SVGs ─────────────────────
// biome-ignore lint/complexity/noExcessiveCognitiveComplexity: build script with batched processing, caching, and cleanup
async function generateIcons(): Promise<void> {
  const t0 = performance.now();

  fs.mkdirSync(srcDir, { recursive: true });

  const svgFiles = fs
    .readdirSync(svgDir)
    .filter((file) => file.endsWith(".svg"));

  const savedManifest = loadManifest();
  const oldManifest: Manifest = force ? {} : savedManifest;
  const newManifest: Manifest = filterPattern ? { ...savedManifest } : {};
  const errors: { error: string; file: string }[] = [];
  let changedCount = 0;
  let cachedCount = 0;

  const filesToProcess = filterPattern
    ? svgFiles.filter((f) => matchesFilter(path.basename(f, ".svg")))
    : svgFiles;

  console.log(
    `Processing SVG files... (${filesToProcess.length} total${force ? ", forced rebuild" : ""})`
  );

  // Process in parallel batches for speed
  const BATCH_SIZE = 50;
  for (let i = 0; i < filesToProcess.length; i += BATCH_SIZE) {
    const batch = filesToProcess.slice(i, i + BATCH_SIZE);
    const results: IconResult[] = await Promise.all(
      batch.map(async (file): Promise<IconResult> => {
        const iconName = path.basename(file, ".svg");
        const componentName = toComponentName(iconName);
        const svgFilePath = path.join(svgDir, file);
        const componentFilePath = path.join(srcDir, `${iconName}.tsx`);

        try {
          const svgCode = fs.readFileSync(svgFilePath, "utf-8");
          const hash = crypto
            .createHash("md5")
            .update(svgCode + configHash)
            .digest("hex");

          if (
            !force &&
            oldManifest[iconName] === hash &&
            fs.existsSync(componentFilePath)
          ) {
            return { cached: true, hash, iconName, ok: true };
          }

          const rawCode = await transform(svgCode, svgrConfig, {
            componentName,
          });
          const componentCode = stripUniformChildStrokeWidth(
            stripRedundantCurrentColorStyles(
              `import { createLucideIcon } from './create-lucide-icon'\n${rawCode}`.replace(
                "export default ForwardRef;",
                `export default createLucideIcon('${componentName}', ForwardRef);`
              )
            )
          );
          if (!componentCode.includes("createLucideIcon(")) {
            throw new Error(
              `Failed to wrap ${componentName} with createLucideIcon`
            );
          }
          fs.writeFileSync(componentFilePath, `${componentCode}\n`);
          return { cached: false, hash, iconName, ok: true };
        } catch (error) {
          const message = errorMessage(error);
          console.error(`  Failed: ${file} - ${message}`);
          return { error: message, iconName, ok: false };
        }
      })
    );

    for (const r of results) {
      if (r.ok) {
        newManifest[r.iconName] = r.hash;
        if (r.cached) {
          cachedCount++;
        } else {
          changedCount++;
        }
      } else {
        errors.push({ error: r.error, file: r.iconName });
      }
    }
  }

  // A `-filled` name is only exported when a `-filled` SVG exists. Missing
  // filled art is a gap in the drawing, not something the build can paper over:
  // an alias back to the outline made the name resolve while rendering outline
  // strokes, so a caller toggling outline → filled saw no change and no error.

  // Remove stale components — always use the full svgFiles list, not a filtered subset
  const allIconNames = new Set(svgFiles.map((f) => path.basename(f, ".svg")));
  const existingComponents = fs
    .readdirSync(srcDir)
    .filter(
      (f) => f.endsWith(".tsx") && f !== "all-icons.ts" && f !== "dynamic.tsx"
    );

  for (const file of existingComponents) {
    const iconName = path.basename(file, ".tsx");
    if (!allIconNames.has(iconName)) {
      fs.unlinkSync(path.join(srcDir, file));
      delete newManifest[iconName];
      // Also remove stale dist files so they don't ship in the npm tarball
      for (const ext of [".js", ".d.ts", ".js.map"]) {
        const stale = path.join(distDir, `${iconName}${ext}`);
        if (fs.existsSync(stale)) {
          fs.unlinkSync(stale);
        }
      }
    }
  }

  // Build sorted re-exports — each icon file already wraps with createLucideIcon
  const sortedNames = svgFiles.map((f) => path.basename(f, ".svg")).toSorted();

  const iconLines: string[] = [];
  for (const name of sortedNames) {
    const componentName = toComponentName(name);
    iconLines.push(`export { default as ${componentName} } from './${name}'`);
  }

  const allIconsHeader = [
    "// Auto-generated by scripts/build.mts — do not edit manually.",
    "",
    "export type { LucideProps, LucideIcon } from './lucide-types'",
    "",
  ];

  fs.writeFileSync(
    path.join(srcDir, "all-icons.ts"),
    `${[...allIconsHeader, ...iconLines].join("\n")}\n`
  );

  // Save cache manifest
  fs.writeFileSync(manifestPath, `${JSON.stringify(newManifest, null, 2)}\n`);

  const elapsed = ((performance.now() - t0) / 1000).toFixed(1);

  console.log(
    `Done in ${elapsed}s — ${changedCount} changed, ${cachedCount} cached, ${sortedNames.length} total`
  );

  if (errors.length) {
    console.error(`\nFailed: ${errors.length} icon(s)`);
    for (const { file, error } of errors) {
      console.error(`  ${file}: ${error}`);
    }
    process.exit(1);
  }
}

// ─── Step 2: Append lucide aliases to all-icons.ts ──────────────────

/** The only three fields of a mapping entry this build reads. */
interface MappingEntry {
  blodeName: string;
  hasMatch: boolean;
  lucideName: string;
}

function isMappingEntry(value: unknown): value is MappingEntry {
  return (
    isRecord(value) &&
    typeof value.blodeName === "string" &&
    typeof value.lucideName === "string" &&
    typeof value.hasMatch === "boolean"
  );
}

function addReExportAlias(
  name: string,
  sourceFile: string,
  aliasLines: string[],
  exportedNames: Set<string>,
  seen: Set<string>
): void {
  if (exportedNames.has(name) || seen.has(name)) {
    return;
  }
  aliasLines.push(`export { default as ${name} } from './${sourceFile}'`);
  seen.add(name);
}

async function generateLucideAliases(): Promise<void> {
  // Import the module rather than regex the file. The previous version matched
  // `lucideName, blodeName, category, hasMatch` in that exact order, so when
  // the formatter alphabetised the object keys it silently matched nothing and
  // the build dropped every alias while still exiting 0. Node strips the types
  // natively, so the mapping is read as data and key order stops mattering.
  const loaded: unknown = await import(pathToFileURL(mappingFile).href);
  const raw = isRecord(loaded) ? loaded.mappings : undefined;
  if (!Array.isArray(raw)) {
    throw new TypeError(
      `${path.basename(mappingFile)} does not export a \`mappings\` array.`
    );
  }
  // A malformed entry is a broken mapping file, not something to skip past:
  // dropping it silently is the same failure mode the regex reader had.
  const entries: MappingEntry[] = (raw as unknown[]).map((entry, index) => {
    if (!isMappingEntry(entry)) {
      throw new Error(
        `${path.basename(mappingFile)}: mappings[${index}] is missing blodeName, lucideName or hasMatch.`
      );
    }
    return {
      blodeName: entry.blodeName,
      hasMatch: entry.hasMatch,
      lucideName: entry.lucideName,
    };
  });

  console.log(`Found ${entries.length} mappings in lucide-mapping.ts`);

  const validEntries = entries.filter((e) => e.hasMatch);
  console.log(`${validEntries.length} entries with hasMatch: true`);

  // A build step whose failure mode is "produces less output" never throws, so
  // assert a floor. Zero aliases means the mapping stopped being readable.
  if (validEntries.length === 0) {
    throw new Error(
      `No usable entries in ${path.basename(mappingFile)}: expected at least one mapping with hasMatch: true, found ${entries.length} total.`
    );
  }

  // Read all-icons.ts to build component→file lookup and exported names set
  const allIconsFile = path.join(srcDir, "all-icons.ts");
  const allIconsContent = fs.readFileSync(allIconsFile, "utf-8");
  const exportedNames = new Set<string>();
  const componentToFile = new Map<string, string>();
  const reExportRegex = /export \{ default as (\w+) \} from '\.\/([^']+)'/g;
  for (const match of allIconsContent.matchAll(reExportRegex)) {
    exportedNames.add(match[1]);
    componentToFile.set(match[1], match[2]);
  }

  // Build alias lines
  const aliasLines = ["", "// Lucide-compatible aliases"];
  const errors: string[] = [];
  const seen = new Set<string>();

  for (const { lucideName, blodeName } of validEntries) {
    const sourceFile = componentToFile.get(blodeName);
    if (!sourceFile) {
      errors.push(
        `  ✗ ${lucideName} → ${blodeName} (not found in all-icons.ts)`
      );
      continue;
    }

    if (seen.has(lucideName)) {
      errors.push(`  ✗ ${lucideName} is duplicated in the map`);
      continue;
    }
    seen.add(lucideName);

    // Outline alias: export { default as Search } from './magnifying-glass'
    aliasLines.push(
      `export { default as ${lucideName} } from './${sourceFile}'`
    );

    // Icon-suffixed alias: SearchIcon → same source
    addReExportAlias(
      `${lucideName}Icon`,
      sourceFile,
      aliasLines,
      exportedNames,
      seen
    );

    // Filled aliases
    const filledBlodeName = blodeName.replace(ICON_SUFFIX_RE, "FilledIcon");
    const filledSourceFile = componentToFile.get(filledBlodeName);
    if (filledSourceFile) {
      addReExportAlias(
        `${lucideName}Filled`,
        filledSourceFile,
        aliasLines,
        exportedNames,
        seen
      );
      addReExportAlias(
        `${lucideName}FilledIcon`,
        filledSourceFile,
        aliasLines,
        exportedNames,
        seen
      );
    }
  }

  if (errors.length > 0) {
    console.error("Mapping errors:");
    for (const e of errors) {
      console.error(e);
    }
    process.exit(1);
  }

  // Append aliases to all-icons.ts
  fs.appendFileSync(allIconsFile, `${aliasLines.join("\n")}\n`);
  console.log(`Appended ${seen.size} lucide aliases to all-icons.ts`);
}

// ─── Step 3: Generate dynamicIconImports.ts ─────────────────────────
function generateDynamicImports(): void {
  const allIconsContent = fs.readFileSync(
    path.join(srcDir, "all-icons.ts"),
    "utf-8"
  );
  const reExportRegex = /export \{ default as (\w+) \} from '\.\/([^']+)'/g;

  const entries: string[] = [];
  for (const match of allIconsContent.matchAll(reExportRegex)) {
    entries.push(`  '${match[1]}': () => import('./${match[2]}')`);
  }

  const content = [
    "// Auto-generated by scripts/build.mts — do not edit manually.",
    "",
    "import type { LucideIcon } from './lucide-types'",
    "",
    "const dynamicIconImports: Record<string, () => Promise<{ default: LucideIcon }>> = {",
    entries.join(",\n"),
    "}",
    "",
    "export default dynamicIconImports",
    "",
  ].join("\n");

  fs.writeFileSync(path.join(srcDir, "dynamicIconImports.ts"), content);
  console.log(`Generated dynamicIconImports.ts with ${entries.length} entries`);
}

// ─── Step 4: Compile with tsc ───────────────────────────────────────
function compile(): void {
  const t0 = performance.now();

  if (force) {
    fs.rmSync(distDir, { force: true, recursive: true });
    fs.rmSync(path.join(ROOT, ".tsbuildinfo"), { force: true });
  }

  console.log("Compiling with tsc...");
  execFileSync("npx", ["tsc", "--project", path.join(ROOT, "tsconfig.json")], {
    cwd: ROOT,
    stdio: "inherit",
  });

  const elapsed = ((performance.now() - t0) / 1000).toFixed(1);
  console.log(`Compiled in ${elapsed}s`);
}

// ─── Main ───────────────────────────────────────────────────────────
async function main(): Promise<void> {
  const t0 = performance.now();

  // Gate: validate the SVG tree and its metadata before generating anything.
  // validate-icons-data.mts was written, wired to an npm script, and then
  // invoked by nothing — not the build, not prepublishOnly, not lefthook — so
  // a malformed category or a duplicate tag shipped unnoticed. Running it here
  // costs milliseconds and is the only place every path to a published package
  // passes through.
  for (const gate of ["validate-icons.mts", "validate-icons-data.mts"]) {
    execFileSync("node", [path.join(__dirname, gate)], { stdio: "inherit" });
  }

  generateSupportFiles();
  await generateIcons();
  await generateLucideAliases();
  generateDynamicImports();
  compile();

  const elapsed = ((performance.now() - t0) / 1000).toFixed(1);
  console.log(`\nBuild complete in ${elapsed}s`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
