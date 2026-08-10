import { sentenceCase } from "change-case";
import Fuse from "fuse.js";

import type { IconStyle, SearchDoc } from "@/lib/icon-types";
import searchIndex from "@/src/icons-search-index.json";

const ICON_SUFFIX_REGEX = /FilledIcon$|Icon$/;

const docs = searchIndex as SearchDoc[];

const fuse = new Fuse(docs, {
  ignoreLocation: true,
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

const NON_ALPHANUMERIC_REGEX = /[^a-zA-Z0-9]/g;
const SEPARATOR_REGEX = /[-\s_]/g;
const CAMEL_BOUNDARY_REGEX = /([a-z0-9])([A-Z])/g;

// Every lookup below is precomputed once at module load. Queries then cost a
// map hit rather than a scan over the whole icon set.
const byExact = new Map<string, SearchDoc[]>();
const byCompact = new Map<string, SearchDoc[]>();

function index(map: Map<string, SearchDoc[]>, key: string, doc: SearchDoc) {
  const bucket = map.get(key);
  if (bucket) {
    bucket.push(doc);
    return;
  }
  map.set(key, [doc]);
}

for (const doc of docs) {
  index(byExact, doc.name.toLowerCase(), doc);
  index(byExact, doc.slug.toLowerCase(), doc);
  index(byExact, doc.title.toLowerCase(), doc);
  index(byCompact, doc.slug.replaceAll("-", ""), doc);
  for (const alias of doc.lucideAliases ?? []) {
    index(byExact, alias.toLowerCase(), doc);
    index(
      byExact,
      alias.replace(CAMEL_BOUNDARY_REGEX, "$1-$2").toLowerCase(),
      doc
    );
    index(
      byCompact,
      alias.replaceAll(NON_ALPHANUMERIC_REGEX, "").toLowerCase(),
      doc
    );
  }
}

/** Parallel to `docs` — the joined haystack `tokenMatches` scans. */
const searchTexts = docs.map((doc) =>
  [
    doc.slug,
    doc.title,
    doc.name,
    doc.category,
    ...(doc.tags ?? []),
    ...(doc.lucideAliases ?? []),
  ]
    .join(" ")
    .toLowerCase()
);

function normalizeQuery(query: string) {
  return query.trim().replaceAll(/\s+/g, " ");
}

function tokenize(query: string) {
  return query
    .toLowerCase()
    .split(/[\s,_/]+/)
    .filter((token) => token.length > 0);
}

function exactMatches(query: string): SearchDoc[] {
  const key = query.toLowerCase();
  const hits: SearchDoc[] = [];
  const seen = new Set<string>();

  for (const doc of [
    ...(byExact.get(key) ?? []),
    ...(byCompact.get(key.replaceAll(SEPARATOR_REGEX, "")) ?? []),
  ]) {
    if (seen.has(doc.slug)) {
      continue;
    }
    seen.add(doc.slug);
    hits.push(doc);
  }

  return hits;
}

function tokenMatches(query: string): SearchDoc[] {
  const tokens = tokenize(query);
  if (tokens.length === 0) {
    return [];
  }
  return docs.filter((_doc, i) =>
    tokens.every((token) => searchTexts[i].includes(token))
  );
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

/**
 * The alias to put in front of a user. `lucideAliases` is sorted, so the raw
 * first entry is often lucide-react's `Lucide`-prefixed secondary export
 * (`LucideSearch`) rather than the name people actually write (`Search`).
 */
export const preferredLucideAlias = (aliases: string[]): string | undefined =>
  aliases.find((alias) => !alias.startsWith("Lucide")) ?? aliases[0];
