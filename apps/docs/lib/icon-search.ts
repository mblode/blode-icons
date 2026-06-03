import { sentenceCase } from "change-case";
import Fuse from "fuse.js";
import type { IconStyle, SearchDoc } from "@/lib/icon-types";
import searchIndex from "@/src/icons-search-index.json";

const ICON_SUFFIX_REGEX = /FilledIcon$|Icon$/;

const docs = searchIndex as SearchDoc[];

// Weighted keys — name/title carry the most signal, tags fill the synonym gap,
// category is a weak tiebreaker. Mirrors lucide.dev's Fuse setup with explicit
// weights tuned for this data.
const fuse = new Fuse(docs, {
  keys: [
    { name: "title", weight: 0.5 },
    { name: "slug", weight: 0.3 },
    { name: "tags", weight: 0.2 },
    { name: "category", weight: 0.05 },
  ],
  threshold: 0.3,
  ignoreLocation: true,
  minMatchCharLength: 2,
});

export const searchIcons = (query: string): SearchDoc[] => {
  const normalized = query.trim();
  if (!normalized) {
    return docs;
  }
  return fuse.search(normalized).map((result) => result.item);
};

export const filterIconsByStyle = (
  icons: SearchDoc[],
  style: IconStyle
): SearchDoc[] => {
  if (style === "SOLID") {
    return icons.filter((icon) => icon.hasFilled);
  }
  return icons;
};

export const getIconDisplayName = (iconName: string) => {
  return sentenceCase(iconName.replace(ICON_SUFFIX_REGEX, ""));
};
