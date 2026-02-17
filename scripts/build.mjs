import { execFileSync } from "node:child_process";
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { transform } from "@svgr/core";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");

const svgDir = path.join(ROOT, "icons-svg");
const dataDir = path.join(ROOT, "icons-data");
const srcDir = path.join(ROOT, "src");
const distDir = path.join(ROOT, "dist");
const manifestPath = path.join(ROOT, ".cache-manifest.json");
const mappingFile = path.join(__dirname, "lucide-mapping.ts");
const ICON_SUFFIX_RE = /Icon$/;

const docsTsxDir = path.join(ROOT, "docs/src/icons-tsx");
const docsSvgDir = path.join(ROOT, "docs/src/icons-svg");
const docsDataDir = path.join(ROOT, "docs/src/icons-data");

// CLI flags
const args = process.argv.slice(2);
const force = args.includes("--force");
const noDocs = args.includes("--no-docs");
const filterArg = args.find((a) => a.startsWith("--filter="));
const filterPattern = filterArg ? filterArg.split("=")[1] : null;

// Load SVGO config
const svgoConfig = JSON.parse(
  fs.readFileSync(path.join(ROOT, "svgo.json"), "utf8")
);

// SVGR options — hash includes config so cache busts on config changes
const svgrConfig = {
  typescript: true,
  ref: true,
  plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
  svgoConfig,
};
const configHash = crypto
  .createHash("md5")
  .update(JSON.stringify(svgrConfig))
  .digest("hex");

function toComponentName(str) {
  return `${str
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("")}Icon`;
}

function matchesFilter(name) {
  if (!filterPattern) {
    return true;
  }
  if (filterPattern.includes("*")) {
    const escaped = filterPattern.replace(/[-/\\^$+?.()|[\]{}]/g, "\\$&");
    const regex = new RegExp(`^${escaped.replace(/\\\*/g, ".*")}$`);
    return regex.test(name);
  }
  return name.includes(filterPattern);
}

function loadManifest() {
  try {
    return JSON.parse(fs.readFileSync(manifestPath, "utf8"));
  } catch {
    return {};
  }
}

// ─── Step 0: Write support files that src/ needs but aren't generated ─
function generateSupportFiles() {
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
 * (size, color, strokeWidth) and supports forwardRef.
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
        color = 'currentColor',
        size = 24,
        strokeWidth = 2,
        style,
        ...rest
      },
      ref,
    ) => {
      return React.createElement(IconComponent, {
        ref,
        width: size,
        height: size,
        strokeWidth,
        style: { color, ...style },
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
}

// ─── Step 1: Generate icon components from SVGs ─────────────────────
// biome-ignore lint/complexity/noExcessiveCognitiveComplexity: build script with batched processing, caching, and cleanup
async function generateIcons() {
  const t0 = performance.now();

  fs.mkdirSync(srcDir, { recursive: true });

  const svgFiles = fs
    .readdirSync(svgDir)
    .filter((file) => file.endsWith(".svg"));

  const savedManifest = loadManifest();
  const oldManifest = force ? {} : savedManifest;
  const newManifest = filterPattern ? { ...savedManifest } : {};
  const errors = [];
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
    const results = await Promise.all(
      batch.map(async (file) => {
        const iconName = path.basename(file, ".svg");
        const componentName = toComponentName(iconName);
        const svgFilePath = path.join(svgDir, file);
        const componentFilePath = path.join(srcDir, `${iconName}.tsx`);

        try {
          const svgCode = fs.readFileSync(svgFilePath, "utf8");
          const hash = crypto
            .createHash("md5")
            .update(svgCode + configHash)
            .digest("hex");

          if (
            !force &&
            oldManifest[iconName] === hash &&
            fs.existsSync(componentFilePath)
          ) {
            return { iconName, hash, cached: true };
          }

          const componentCode = await transform(svgCode, svgrConfig, {
            componentName,
          });
          fs.writeFileSync(componentFilePath, `${componentCode}\n`);
          return { iconName, hash, cached: false };
        } catch (err) {
          console.error(`  Failed: ${file} - ${err.message}`);
          return { iconName, error: err.message };
        }
      })
    );

    for (const r of results) {
      if (r.error) {
        errors.push({ file: r.iconName, error: r.error });
      } else {
        newManifest[r.iconName] = r.hash;
        if (r.cached) {
          cachedCount++;
        } else {
          changedCount++;
        }
      }
    }
  }

  // Generate filled aliases for outline icons missing a filled SVG
  const outlineNames = new Set();
  const filledNames = new Set();

  for (const f of svgFiles) {
    const name = path.basename(f, ".svg");
    if (name.endsWith("-filled")) {
      filledNames.add(name.slice(0, -"-filled".length));
    } else {
      outlineNames.add(name);
    }
  }

  const filledAliases = new Set();
  for (const name of outlineNames) {
    if (!filledNames.has(name)) {
      filledAliases.add(`${name}-filled`);
    }
  }

  let aliasCount = 0;
  for (const aliasName of filledAliases) {
    const outlineName = aliasName.slice(0, -"-filled".length);
    const aliasFilePath = path.join(srcDir, `${aliasName}.tsx`);
    const aliasContent = `export { default } from './${outlineName}';\n`;

    if (
      !fs.existsSync(aliasFilePath) ||
      fs.readFileSync(aliasFilePath, "utf8") !== aliasContent
    ) {
      fs.writeFileSync(aliasFilePath, aliasContent);
      aliasCount++;
    }
  }

  if (filledAliases.size > 0) {
    console.log(
      `  ${aliasCount} filled alias(es) written (${filledAliases.size} total)`
    );
  }

  // Remove stale components — always use full svgFiles list + aliases, not filtered subset
  const allIconNames = new Set(svgFiles.map((f) => path.basename(f, ".svg")));
  for (const alias of filledAliases) {
    allIconNames.add(alias);
  }
  const existingComponents = fs
    .readdirSync(srcDir)
    .filter((f) => f.endsWith(".tsx") && f !== "all-icons.ts");

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

  // Build sorted wrapped exports — every icon gets createLucideIcon
  const allExportNames = svgFiles.map((f) => path.basename(f, ".svg"));
  for (const alias of filledAliases) {
    allExportNames.push(alias);
  }
  const sortedNames = allExportNames.sort();

  const iconLines = [];
  for (const name of sortedNames) {
    const componentName = toComponentName(name);
    iconLines.push(`import _${componentName} from './${name}'`);
    iconLines.push(
      `export const ${componentName} = createLucideIcon('${componentName}', _${componentName})`
    );
  }

  const allIconsHeader = [
    "// Auto-generated by scripts/build.mjs — do not edit manually.",
    "",
    "import { createLucideIcon } from './create-lucide-icon'",
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
    `Done in ${elapsed}s — ${changedCount} changed, ${cachedCount} cached, ${filledAliases.size} aliases, ${sortedNames.length} total${noDocs ? " (skipped docs)" : ""}`
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

function addAlias(name, rawImport, aliasLines, exportedNames, seen) {
  if (exportedNames.has(name) || seen.has(name)) {
    return;
  }
  aliasLines.push(
    `export const ${name} = createLucideIcon('${name}', _${rawImport})`
  );
  seen.add(name);
}

function generateLucideAliases() {
  const mappingContent = fs.readFileSync(mappingFile, "utf-8");
  const entries = [];
  const entryRegex =
    /lucideName:\s*["']([^"']+)["'],\s*fingertipName:\s*["']([^"']+)["'],\s*category:\s*["']([^"']+)["'],\s*hasMatch:\s*(true|false)/g;
  for (const match of mappingContent.matchAll(entryRegex)) {
    entries.push({
      lucideName: match[1],
      fingertipName: match[2],
      hasMatch: match[4] === "true",
    });
  }

  console.log(`Found ${entries.length} mappings in lucide-mapping.ts`);

  const validEntries = entries.filter((e) => e.hasMatch);
  console.log(`${validEntries.length} entries with hasMatch: true`);

  // Read all-icons.ts to validate that fingertipNames exist
  const allIconsFile = path.join(srcDir, "all-icons.ts");
  const allIconsContent = fs.readFileSync(allIconsFile, "utf-8");
  const exportedNames = new Set();
  const exportRegex = /export const (\w+) = createLucideIcon/g;
  for (const match of allIconsContent.matchAll(exportRegex)) {
    exportedNames.add(match[1]);
  }

  // Build alias lines
  const aliasLines = ["", "// Lucide-compatible aliases"];
  const errors = [];
  const seen = new Set();

  for (const { lucideName, fingertipName } of validEntries) {
    if (!exportedNames.has(fingertipName)) {
      errors.push(
        `  ✗ ${lucideName} → ${fingertipName} (not found in all-icons.ts)`
      );
      continue;
    }

    if (seen.has(lucideName)) {
      errors.push(`  ✗ ${lucideName} is duplicated in the map`);
      continue;
    }
    seen.add(lucideName);

    // Outline alias: Search → _MagnifyingGlassIcon
    aliasLines.push(
      `export const ${lucideName} = createLucideIcon('${lucideName}', _${fingertipName})`
    );

    // Icon-suffixed alias: SearchIcon → _MagnifyingGlassIcon
    addAlias(
      `${lucideName}Icon`,
      fingertipName,
      aliasLines,
      exportedNames,
      seen
    );

    // Filled aliases
    const filledFingertipName = fingertipName.replace(
      ICON_SUFFIX_RE,
      "FilledIcon"
    );
    if (exportedNames.has(filledFingertipName)) {
      addAlias(
        `${lucideName}Filled`,
        filledFingertipName,
        aliasLines,
        exportedNames,
        seen
      );
      addAlias(
        `${lucideName}FilledIcon`,
        filledFingertipName,
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

  // Clean up stale lucide.ts files
  const staleLucide = path.join(srcDir, "lucide.ts");
  if (fs.existsSync(staleLucide)) {
    fs.unlinkSync(staleLucide);
  }
  for (const ext of [".js", ".d.ts", ".js.map"]) {
    const stale = path.join(distDir, `lucide${ext}`);
    if (fs.existsSync(stale)) {
      fs.unlinkSync(stale);
    }
  }
}

// ─── Copy to docs directories ───────────────────────────────────────
function copyDocs() {
  if (noDocs) {
    return;
  }

  fs.rmSync(docsTsxDir, { recursive: true, force: true });
  fs.cpSync(srcDir, docsTsxDir, { recursive: true });

  fs.rmSync(docsSvgDir, { recursive: true, force: true });
  fs.cpSync(svgDir, docsSvgDir, { recursive: true });

  fs.rmSync(docsDataDir, { recursive: true, force: true });
  fs.cpSync(dataDir, docsDataDir, { recursive: true });
}

// ─── Step 3: Compile with tsc ───────────────────────────────────────
function compile() {
  const t0 = performance.now();

  if (force) {
    fs.rmSync(distDir, { recursive: true, force: true });
    fs.rmSync(path.join(ROOT, ".tsbuildinfo"), { force: true });
  }

  console.log("Compiling with tsc...");
  execFileSync(
    path.join(ROOT, "node_modules", ".bin", "tsc"),
    ["--project", path.join(ROOT, "tsconfig.json")],
    { stdio: "inherit", cwd: ROOT }
  );

  const elapsed = ((performance.now() - t0) / 1000).toFixed(1);
  console.log(`Compiled in ${elapsed}s`);
}

// ─── Main ───────────────────────────────────────────────────────────
async function main() {
  const t0 = performance.now();

  generateSupportFiles();
  await generateIcons();
  generateLucideAliases();
  copyDocs();
  compile();

  const elapsed = ((performance.now() - t0) / 1000).toFixed(1);
  console.log(`\nBuild complete in ${elapsed}s`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
