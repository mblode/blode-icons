import "server-only";
import {
  filterIconsByStyle,
  getIconByNameOrSlug,
  searchIcons,
} from "@/lib/icon-search";
import { readIconSource } from "@/lib/icon-source-server";
import type { IconStyle, SearchDoc } from "@/lib/icon-types";

export interface IconPayload {
  category: string;
  componentName: string;
  hasFilled: boolean;
  importSnippet: string;
  license: "MIT";
  lucideAliases: string[];
  package: "blode-icons-react";
  slug: string;
  svg?: string;
  tags: string[];
  tsx?: string;
}

export function searchIconDocs(options: {
  limit?: number;
  query: string;
  style?: IconStyle;
}): SearchDoc[] {
  const limit = Math.min(Math.max(options.limit ?? 25, 1), 100);
  const results = searchIcons(options.query, limit * 3);
  const filtered = options.style
    ? filterIconsByStyle(results, options.style)
    : results;
  return filtered.slice(0, limit);
}

export async function buildIconPayload(
  name: string,
  format: "svg" | "tsx" | "both" = "both"
): Promise<IconPayload | null> {
  const doc = getIconByNameOrSlug(name);
  if (!doc) {
    return null;
  }

  const lucideAlias = doc.lucideAliases[0];
  const importName = lucideAlias ?? doc.name;
  const payload: IconPayload = {
    category: doc.category,
    componentName: doc.name,
    hasFilled: doc.hasFilled,
    importSnippet: `import { ${importName} } from "blode-icons-react";`,
    license: "MIT",
    lucideAliases: doc.lucideAliases,
    package: "blode-icons-react",
    slug: doc.slug,
    tags: doc.tags,
  };

  if (format === "svg" || format === "both") {
    payload.svg = (await readIconSource(doc.slug, "svg")) ?? undefined;
  }
  if (format === "tsx" || format === "both") {
    payload.tsx = (await readIconSource(doc.slug, "tsx")) ?? undefined;
  }

  return payload;
}
