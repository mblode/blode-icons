import type { MetadataRoute } from "next";

import { siteUrl } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

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
