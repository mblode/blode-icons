import type { Metadata } from "next";

import { GettingStarted } from "@/components/getting-started";

const description =
  "Install Blode Icons in your React app. Add the blode-icons-react package with npm, pnpm, or bun, then import 2,000+ icons with Lucide-compatible names.";

export const metadata: Metadata = {
  alternates: {
    canonical: "/installation",
  },
  description,
  openGraph: {
    description,
    images: [{ url: "/opengraph-image" }],
    locale: "en_US",
    siteName: "Blode Icons",
    title: "Install Blode Icons — React Setup & Usage Guide",
    type: "article",
    url: "/installation",
  },
  title: { absolute: "Install Blode Icons — React Setup & Usage Guide" },
  twitter: {
    card: "summary_large_image",
    description,
    images: ["/twitter-image"],
    title: "Install Blode Icons — React Setup & Usage Guide",
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
