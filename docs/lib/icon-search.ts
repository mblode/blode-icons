import { sentenceCase } from "change-case";
import type { IconRecord, IconStyle } from "@/lib/icon-types";

const NORMALIZE_SPACE = /\s+/g;

const getSearchHaystack = (icon: IconRecord) => {
  return [icon.name, icon.category, ...icon.categories, ...icon.tags]
    .join(" ")
    .toLowerCase();
};

export const searchIcons = (icons: IconRecord[], query: string): IconRecord[] => {
  const normalizedQuery = query.trim().toLowerCase().replace(NORMALIZE_SPACE, " ");

  if (!normalizedQuery) {
    return icons;
  }

  const terms = normalizedQuery.split(" ");

  return icons.filter((icon) => {
    const haystack = getSearchHaystack(icon);
    return terms.every((term) => haystack.includes(term));
  });
};

export const filterIconsByStyle = (icons: IconRecord[], style: IconStyle) => {
  if (style === "OUTLINE") {
    return icons.filter((icon) => !icon.name.includes("Filled"));
  }

  return icons.filter((icon) => icon.name.includes("Filled"));
};

export const getIconDisplayName = (iconName: string) => {
  return sentenceCase(iconName.replace(/Icon$/, ""));
};
