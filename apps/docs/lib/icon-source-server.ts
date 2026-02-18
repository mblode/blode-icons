import "server-only";

import { readdirSync, readFileSync } from "node:fs";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { type IconSourceFormat, isValidIconName } from "@/lib/icon-source";

const normalizeIconSlug = (iconSlug: string) => iconSlug.replace(/-/g, "");

const componentSourceMap = new Map<string, string>();
const allIconsPath = path.join(
  process.cwd(),
  "src",
  "icons-tsx",
  "all-icons.ts"
);
const allIconsSource = readFileSync(allIconsPath, "utf8");
const allIconsExportPattern =
  /export \{ default as (\w+) \} from ["']\.\/([^"']+)["']/g;
for (const match of allIconsSource.matchAll(allIconsExportPattern)) {
  componentSourceMap.set(match[1], match[2]);
}

const readIconFileNames = (format: IconSourceFormat) => {
  const extension = format === "svg" ? ".svg" : ".tsx";
  const directory = format === "svg" ? "icons-svg" : "icons-tsx";
  const sourceDir = path.join(process.cwd(), "src", directory);
  const stems = readdirSync(sourceDir)
    .filter((fileName) => fileName.endsWith(extension))
    .map((fileName) => fileName.slice(0, -extension.length));

  const normalized = new Map<string, string>();
  for (const stem of stems) {
    normalized.set(normalizeIconSlug(stem), stem);
  }

  return {
    sourceDir,
    extension,
    stems: new Set(stems),
    normalized,
  };
};

const iconSourceFilesByFormat: Record<
  IconSourceFormat,
  ReturnType<typeof readIconFileNames>
> = {
  svg: readIconFileNames("svg"),
  tsx: readIconFileNames("tsx"),
};

const resolveSourceStem = (iconName: string, format: IconSourceFormat) => {
  const fromComponentName = componentSourceMap.get(iconName);
  if (fromComponentName) {
    return fromComponentName;
  }

  const files = iconSourceFilesByFormat[format];
  if (files.stems.has(iconName)) {
    return iconName;
  }
  return files.normalized.get(normalizeIconSlug(iconName)) ?? null;
};

const getSourcePath = (iconName: string, format: IconSourceFormat) => {
  const files = iconSourceFilesByFormat[format];
  const sourceStem = resolveSourceStem(iconName, format);
  if (!sourceStem) {
    return null;
  }

  return path.join(files.sourceDir, `${sourceStem}${files.extension}`);
};

export const readIconSource = async (
  iconName: string,
  format: IconSourceFormat
): Promise<string | null> => {
  if (!isValidIconName(iconName)) {
    return null;
  }

  const sourcePath = getSourcePath(iconName, format);
  if (!sourcePath) {
    return null;
  }

  try {
    return await readFile(sourcePath, "utf8");
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return null;
    }
    throw error;
  }
};
