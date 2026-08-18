import "server-only";
import { getAllSearchDocs } from "@/lib/icon-search";
import { readIconSource } from "@/lib/icon-source-server";
import type { SearchDoc } from "@/lib/icon-types";

const ICON_SUFFIX_REGEX = /Icon$/;
const FILLED_SUFFIX = "FilledIcon";

const docBySlug = new Map(getAllSearchDocs().map((doc) => [doc.slug, doc]));

/**
 * Exact slug lookup. Unlike `getIconByNameOrSlug` there is no fuzzy fallback:
 * a route must 404 on a wrong slug rather than quietly serve a near miss under
 * a canonical URL that then disagrees with its own content.
 */
export const getIconDoc = (slug: string): SearchDoc | null =>
  docBySlug.get(slug) ?? null;

export const getAllIconSlugs = (): string[] =>
  getAllSearchDocs().map((doc) => doc.slug);

export const filledComponentName = (doc: SearchDoc) =>
  doc.name.replace(ICON_SUFFIX_REGEX, FILLED_SUFFIX);

export interface IconVariant {
  componentName: string;
  label: string;
  slug: string;
  /** Null when the file is missing, which is a data bug rather than a state. */
  svg: string | null;
  tsx: string | null;
}

export interface IconDetail {
  doc: SearchDoc;
  importSnippet: string;
  /** Outline first, then Filled when the icon has distinct filled art. */
  variants: IconVariant[];
}

const readVariant = async (
  slug: string,
  componentName: string,
  label: string
): Promise<IconVariant> => {
  const [svg, tsx] = await Promise.all([
    readIconSource(slug, "svg"),
    readIconSource(slug, "tsx"),
  ]);
  return { componentName, label, slug, svg, tsx };
};

/**
 * Everything the detail page renders, read off disk once per icon.
 *
 * Cached because the page is prerendered and `generateMetadata` needs the same
 * record the body does; without it every icon costs two passes over its files.
 */
export const getIconDetail = async (
  slug: string
): Promise<IconDetail | null> => {
  "use cache";

  const doc = docBySlug.get(slug);
  if (!doc) {
    return null;
  }

  const filledName = filledComponentName(doc);
  const variants = await Promise.all([
    readVariant(doc.slug, doc.name, "Outline"),
    ...(doc.hasFilled
      ? [readVariant(`${doc.slug}-filled`, filledName, "Filled")]
      : []),
  ]);

  const names = doc.hasFilled ? `${doc.name}, ${filledName}` : doc.name;

  return {
    doc,
    importSnippet: `import { ${names} } from "blode-icons-react";`,
    variants,
  };
};

/**
 * Outline markup for a list of slugs, for the grids that are not the search
 * page: a category, or the concepts table. One `readFile` per icon, cached, so
 * a prerendered grid costs nothing at request time.
 */
export const getIconSvgs = async (
  slugs: string[]
): Promise<Record<string, string>> => {
  "use cache";

  const sources = await Promise.all(
    slugs.map((slug) => readIconSource(slug, "svg"))
  );

  const markupBySlug: Record<string, string> = {};
  for (const [index, source] of sources.entries()) {
    if (source) {
      markupBySlug[slugs[index]] = source;
    }
  }
  return markupBySlug;
};
