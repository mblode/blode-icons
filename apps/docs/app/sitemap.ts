import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://icons.blode.co";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      changeFrequency: "weekly",
      lastModified,
      priority: 1,
      url: `${SITE_URL}/`,
    },
    {
      changeFrequency: "monthly",
      lastModified,
      priority: 0.8,
      url: `${SITE_URL}/installation`,
    },
  ];
}
