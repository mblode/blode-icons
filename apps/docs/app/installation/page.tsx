import type { Metadata } from "next";

import { GettingStarted } from "@/components/getting-started";

const description =
  "Install Blode Icons in your React app. Add the blode-icons-react package with npm, pnpm, or bun, then import 4,000+ icons with Lucide-compatible names.";

const title = "Install Blode Icons: React setup and usage guide";

export const metadata: Metadata = {
  alternates: {
    canonical: "/installation",
  },
  description,
  openGraph: {
    description,
    images: [{ url: "/opengraph-image" }],
    locale: "en_US",
    siteName: "Matthew Blode",
    title,
    type: "article",
    url: "/installation",
  },
  title: { absolute: title },
  twitter: {
    card: "summary_large_image",
    creator: "@mattblode",
    description,
    images: ["/twitter-image"],
    title,
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
