import type { Metadata } from "next";

import { GettingStarted } from "@/components/getting-started";
import { siteUrl } from "@/lib/config";

const description =
  "Install blode-icons-react, drop icons into your UI, and point your agent at Blode via MCP.";

const title = "Install";
const cardTitle = "Install Blode Icons";
const pageUrl = `${siteUrl}/installation`;

export const metadata: Metadata = {
  alternates: {
    canonical: pageUrl,
  },
  description,
  openGraph: {
    description,
    images: [{ url: "/opengraph-image" }],
    locale: "en_US",
    siteName: "Matthew Blode",
    title: cardTitle,
    type: "article",
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

export default function InstallationPage() {
  return (
    <div className="min-h-screen">
      <main className="pt-4 pb-8">
        <GettingStarted />
      </main>
    </div>
  );
}
