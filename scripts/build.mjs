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

  // Remove stale components — always use full svgFiles list, not filtered subset
  const allIconNames = new Set(svgFiles.map((f) => path.basename(f, ".svg")));
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
        if (fs.existsSync(stale)) fs.unlinkSync(stale);
      }
    }
  }

  // Build sorted exports from all SVG files (not just filtered)
  const exports = svgFiles
    .map((f) => path.basename(f, ".svg"))
    .map(
      (name) =>
        `export { default as ${toComponentName(name)} } from './${name}';`
    )
    .sort();

  fs.writeFileSync(
    path.join(srcDir, "all-icons.ts"),
    `${exports.join("\n")}\n`
  );

  // Save cache manifest
  fs.writeFileSync(manifestPath, `${JSON.stringify(newManifest, null, 2)}\n`);

  // Copy to docs directories
  if (!noDocs) {
    fs.rmSync(docsTsxDir, { recursive: true, force: true });
    fs.cpSync(srcDir, docsTsxDir, { recursive: true });

    fs.rmSync(docsSvgDir, { recursive: true, force: true });
    fs.cpSync(svgDir, docsSvgDir, { recursive: true });

    fs.rmSync(docsDataDir, { recursive: true, force: true });
    fs.cpSync(dataDir, docsDataDir, { recursive: true });
  }

  const elapsed = ((performance.now() - t0) / 1000).toFixed(1);

  console.log(
    `Done in ${elapsed}s — ${changedCount} changed, ${cachedCount} cached, ${exports.length} total${noDocs ? " (skipped docs)" : ""}`
  );

  if (errors.length) {
    console.error(`\nFailed: ${errors.length} icon(s)`);
    for (const { file, error } of errors) {
      console.error(`  ${file}: ${error}`);
    }
    process.exit(1);
  }
}

// ─── Step 2: Generate lucide compatibility layer ────────────────────
function generateLucide() {
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

  // Parse all-icons.ts to build a map of export name -> module path
  const indexFile = path.join(srcDir, "all-icons.ts");
  const indexContent = fs.readFileSync(indexFile, "utf-8");
  const exportMap = {};
  const exportRegex = /export \{ default as (\w+) \} from '\.\/([^']+)'/g;

  for (const match of indexContent.matchAll(exportRegex)) {
    exportMap[match[1]] = match[2];
  }

  // Build output
  const lines = [
    "// Auto-generated by scripts/build.mjs — do not edit manually.",
    "",
    "import { createLucideIcon } from './create-lucide-icon'",
    "export type { LucideProps, LucideIcon } from './lucide-types'",
    "",
  ];
  const errors = [];
  const seen = new Set();

  for (const { lucideName, fingertipName } of validEntries) {
    const modulePath = exportMap[fingertipName];

    if (!modulePath) {
      errors.push(
        `  ✗ ${lucideName} → ${fingertipName} (not found in src/all-icons.ts)`
      );
      continue;
    }

    if (seen.has(lucideName)) {
      errors.push(`  ✗ ${lucideName} is duplicated in the map`);
      continue;
    }
    seen.add(lucideName);

    lines.push(`import _${lucideName} from './${modulePath}'`);
    lines.push(
      `export const ${lucideName} = createLucideIcon('${lucideName}', _${lucideName})`
    );
  }

  if (errors.length > 0) {
    console.error("Mapping errors:");
    for (const e of errors) {
      console.error(e);
    }
    process.exit(1);
  }

  const outputFile = path.join(srcDir, "lucide.ts");
  fs.writeFileSync(outputFile, `${lines.join("\n")}\n`);
  console.log(`Generated lucide.ts with ${seen.size} wrapped exports`);
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

  await generateIcons();
  generateLucide();
  compile();

  const elapsed = ((performance.now() - t0) / 1000).toFixed(1);
  console.log(`\nBuild complete in ${elapsed}s`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
