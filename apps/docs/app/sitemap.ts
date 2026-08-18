import type { MetadataRoute } from "next";

import { siteUrl } from "@/lib/config";
import { getIconCategories } from "@/lib/icon-categories";
import { getAllSearchDocs } from "@/lib/icon-search";

export default function sitemap(): MetadataRoute.Sitemap {
  // Prerendered, so this cannot read the clock. `BUILD_DATE` is stamped in
  // next.config.ts and moves on every deploy, which is when these pages can
  // actually change.
  const lastModified = process.env.BUILD_DATE;

  return [
    {
      changeFrequency: "weekly",
      lastModified,
      priority: 1,
      url: siteUrl,
    },
    {
      changeFrequency: "monthly",
      lastModified,
      priority: 0.8,
      url: `${siteUrl}/installation`,
    },
    {
      changeFrequency: "monthly",
      lastModified,
      priority: 0.8,
      url: `${siteUrl}/philosophy`,
    },
    {
      changeFrequency: "weekly",
      lastModified,
      priority: 0.7,
      url: `${siteUrl}/categories`,
    },
    {
      changeFrequency: "weekly",
      lastModified,
      priority: 0.7,
      url: `${siteUrl}/concepts`,
    },
    ...getIconCategories().map((category) => ({
      changeFrequency: "weekly" as const,
      lastModified,
      priority: 0.6,
      url: `${siteUrl}/categories/${category.slug}`,
    })),
    // Every icon detail page. 2,139 of them, well inside the 50,000-URL limit,
    // and they are the long-tail search surface: without them the whole set is
    // one indexable page whose contents only exist after JavaScript runs.
    ...getAllSearchDocs().map((doc) => ({
      changeFrequency: "monthly" as const,
      lastModified,
      priority: 0.5,
      url: `${siteUrl}/${doc.slug}`,
    })),
    // No `/llms.txt` here. A sitemap lists indexable HTML pages, and that route
    // is plain text: no title, no canonical, no description, no OG. Listing it
    // only gave crawlers a page-shaped thing that fails every page check.
    // Agents reach it from `/.well-known` and the `llms.txt` convention, which
    // do not depend on a sitemap entry.
  ];
}
