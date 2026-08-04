import type { MetadataRoute } from "next";

import { siteUrl } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  // Prerendered, so this cannot read the clock. `BUILD_DATE` is stamped in
  // next.config.ts and moves on every deploy, which is when these two pages
  // can actually change.
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
  ];
}
