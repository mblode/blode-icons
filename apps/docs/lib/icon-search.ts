import { sentenceCase } from "change-case";
import Fuse from "fuse.js";

import type { IconStyle, SearchDoc } from "@/lib/icon-types";
import searchIndex from "@/src/icons-search-index.json";

const ICON_SUFFIX_REGEX = /FilledIcon$|Icon$/;

const docs = searchIndex as SearchDoc[];

const fuse = new Fuse(docs, {
  ignoreLocation: true,
  includeScore: true,
  keys: [
    { name: "title", weight: 0.35 },
    { name: "slug", weight: 0.25 },
    { name: "lucideAliases", weight: 0.25 },
    { name: "tags", weight: 0.12 },
    { name: "category", weight: 0.03 },
  ],
  minMatchCharLength: 2,
  threshold: 0.35,
});

const bySlug = new Map(docs.map((doc) => [doc.slug, doc]));
const byAlias = new Map<string, SearchDoc>();
for (const doc of docs) {
  byAlias.set(doc.name.toLowerCase(), doc);
  byAlias.set(doc.slug.toLowerCase(), doc);
  byAlias.set(doc.title.toLowerCase(), doc);
  for (const alias of doc.lucideAliases ?? []) {
    byAlias.set(alias.toLowerCase(), doc);
    byAlias.set(
      alias.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
      doc
    );
  }
}

function normalizeQuery(query: string) {
  return query.trim().replaceAll(/\s+/g, " ");
}

function tokenize(query: string) {
  return query
    .toLowerCase()
    .split(/[\s,_/]+/)
    .filter((token) => token.length > 0);
}

function docSearchText(doc: SearchDoc) {
  return [
    doc.slug,
    doc.title,
    doc.name,
    doc.category,
    ...(doc.tags ?? []),
    ...(doc.lucideAliases ?? []),
  ]
    .join(" ")
    .toLowerCase();
}

function exactMatches(query: string): SearchDoc[] {
  const key = query.toLowerCase();
  const compact = key.replaceAll(/[\s-_]/g, "");
  const hits: SearchDoc[] = [];
  const seen = new Set<string>();

  const push = (doc: SearchDoc | undefined) => {
    if (!doc || seen.has(doc.slug)) {
      return;
    }
    seen.add(doc.slug);
    hits.push(doc);
  };

  push(byAlias.get(key));
  push(bySlug.get(key));

  for (const doc of docs) {
    if (seen.has(doc.slug)) {
      continue;
    }
    const aliases = doc.lucideAliases ?? [];
    if (
      doc.slug === key ||
      doc.title === key ||
      doc.name.toLowerCase() === key ||
      aliases.some((alias) => alias.toLowerCase() === key) ||
      doc.slug.replaceAll("-", "") === compact ||
      aliases.some(
        (alias) =>
          alias.replaceAll(/[^a-zA-Z0-9]/g, "").toLowerCase() === compact
      )
    ) {
      push(doc);
    }
  }

  return hits;
}

function tokenMatches(query: string): SearchDoc[] {
  const tokens = tokenize(query);
  if (tokens.length === 0) {
    return [];
  }
  return docs.filter((doc) => {
    const haystack = docSearchText(doc);
    return tokens.every((token) => haystack.includes(token));
  });
}

/**
 * Hybrid ranker: exact slug/alias/title → all-tokens match → Fuse fuzzy.
 * Same function powers the docs UI, REST search, and MCP tools.
 */
export const searchIcons = (query: string, limit?: number): SearchDoc[] => {
  const normalized = normalizeQuery(query);
  if (!normalized) {
    return typeof limit === "number" ? docs.slice(0, limit) : docs;
  }

  const seen = new Set<string>();
  const ranked: SearchDoc[] = [];

  const pushAll = (items: SearchDoc[]) => {
    for (const item of items) {
      if (seen.has(item.slug)) {
        continue;
      }
      seen.add(item.slug);
      ranked.push(item);
    }
  };

  pushAll(exactMatches(normalized));
  pushAll(tokenMatches(normalized));
  pushAll(fuse.search(normalized).map((result) => result.item));

  if (typeof limit === "number") {
    return ranked.slice(0, Math.max(0, limit));
  }
  return ranked;
};

export const getIconByNameOrSlug = (name: string): SearchDoc | null => {
  const normalized = normalizeQuery(name);
  if (!normalized) {
    return null;
  }
  return exactMatches(normalized)[0] ?? searchIcons(normalized, 1)[0] ?? null;
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

export const getIconDisplayName = (iconName: string) =>
  sentenceCase(iconName.replace(ICON_SUFFIX_REGEX, ""));

export const getAllSearchDocs = () => docs;
