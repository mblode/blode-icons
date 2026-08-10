import type { Metadata } from "next";

import { StatsClient } from "@/components/stats-client";
import { asset, siteUrl } from "@/lib/config";

const description =
  "Icons fetched and searched by agents via MCP, the HTTP API, and the shadcn registry.";

// Document title stays bare so the layout template adds `| Blode Icons`.
// `title.template` does not reach `og:title` / `twitter:title`, so the card
// titles carry the product suffix explicitly.
const title = "Agent stats";
const cardTitle = "Agent stats | Blode Icons";
const pageUrl = `${siteUrl}/stats`;

export const metadata: Metadata = {
  alternates: { canonical: pageUrl },
  description,
  openGraph: {
    description,
    images: [{ url: "/opengraph-image" }],
    locale: "en_US",
    // Object-valued metadata replaces the parent wholesale, so every field
    // the layout provided (siteName, images, …) is our responsibility here.
    siteName: "Matthew Blode",
    title: cardTitle,
    type: "website",
    url: pageUrl,
  },
  title,
  twitter: {
    card: "summary_large_image",
    creator: "@mattblode",
    description,
    images: ["/twitter-image"],
    title: cardTitle,
  },
};

export default function StatsPage() {
  return (
    <div className="mx-auto w-full max-w-3xl flex-1 px-4 py-10">
      <h1 className="font-semibold text-2xl tracking-tight">Agent stats</h1>
      <p className="mt-2 text-muted-foreground text-sm">
        Icons fetched and searched by agents via MCP, the HTTP API, and the
        shadcn registry. Events are recorded in the background and never block
        icon delivery.
      </p>
      <StatsClient apiUrl={asset("/api/stats")} mcpUrl={asset("/mcp")} />
    </div>
  );
}
