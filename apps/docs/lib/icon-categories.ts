import { getAllSearchDocs } from "@/lib/icon-search";
import type { SearchDoc } from "@/lib/icon-types";

/**
 * Bucket for icons whose `icons-data` record carries no `category`. 96 of them
 * today. They are still real icons, so they get a page rather than vanishing
 * from the browser: an empty string is not a category name a reader can use.
 */
export const UNCATEGORIZED = "Uncategorized";

const NON_SLUG_CHARS = /[^a-z0-9]+/g;
const EDGE_DASHES = /^-+|-+$/g;

/** "AI & Magic" -> "ai-magic". Stable, and unique across the 40 category names. */
export const categoryToSlug = (category: string) =>
  category
    .toLowerCase()
    .replaceAll(NON_SLUG_CHARS, "-")
    .replace(EDGE_DASHES, "");

export interface IconCategory {
  count: number;
  icons: SearchDoc[];
  name: string;
  slug: string;
}

// Built once at module load from the same prebuilt index the search uses, so a
// category page and a search hit can never disagree about what is in a bucket.
const docsBySlug = new Map<string, SearchDoc[]>();
const nameBySlug = new Map<string, string>();

for (const doc of getAllSearchDocs()) {
  const name = doc.category || UNCATEGORIZED;
  const slug = categoryToSlug(name);
  nameBySlug.set(slug, name);
  const bucket = docsBySlug.get(slug);
  if (bucket) {
    bucket.push(doc);
  } else {
    docsBySlug.set(slug, [doc]);
  }
}

export const getIconCategories = (): IconCategory[] =>
  [...docsBySlug]
    .map(([slug, docs]) => ({
      count: docs.length,
      icons: docs,
      name: nameBySlug.get(slug) ?? UNCATEGORIZED,
      slug,
    }))
    .toSorted((a, b) => a.name.localeCompare(b.name));

export const getIconCategory = (slug: string): IconCategory | null => {
  const docs = docsBySlug.get(slug);
  const name = nameBySlug.get(slug);
  if (!(docs && name)) {
    return null;
  }
  return { count: docs.length, icons: docs, name, slug };
};

/** The category page to link an icon at, or null when it has no category. */
export const categoryHrefForDoc = (doc: SearchDoc) =>
  doc.category ? categoryToSlug(doc.category) : null;
