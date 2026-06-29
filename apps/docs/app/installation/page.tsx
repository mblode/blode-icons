import type { Metadata } from "next";
import { GettingStarted } from "@/components/getting-started";

const description =
  "Install Blode Icons in your React app. Add the blode-icons-react package with npm, pnpm, or bun, then import 2,000+ icons with Lucide-compatible names.";

export const metadata: Metadata = {
  title: { absolute: "Install Blode Icons — React Setup & Usage Guide" },
  description,
  alternates: {
    canonical: "/installation",
  },
  openGraph: {
    type: "article",
    locale: "en_US",
    url: "/installation",
    title: "Install Blode Icons — React Setup & Usage Guide",
    description,
    siteName: "Blode Icons",
    images: [{ url: "/opengraph-image" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Install Blode Icons — React Setup & Usage Guide",
    description,
    images: ["/twitter-image"],
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
