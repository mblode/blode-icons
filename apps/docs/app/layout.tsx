import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";

import { Providers } from "@/components/providers";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteUrl } from "@/lib/config";

import "./globals.css";

const glide = localFont({
  display: "swap",
  src: [
    { path: "./fonts/glide-variable.woff2", style: "normal" },
    { path: "./fonts/glide-variable-italic.woff2", style: "italic" },
  ],
  variable: "--font-glide",
  weight: "100 950",
});

const glideMono = localFont({
  display: "swap",
  src: "./fonts/glide-mono.woff2",
  variable: "--font-glide-mono",
  weight: "400",
});

export const viewport: Viewport = {
  initialScale: 1,
  themeColor: [
    { color: "#ffffff", media: "(prefers-color-scheme: light)" },
    { color: "#09090b", media: "(prefers-color-scheme: dark)" },
  ],
  width: "device-width",
};

// Rule 8: `Product: what it does`, under 60 characters, and no em dash. The
// repo-wide em-dash ban was being applied to prose and skipped in metadata.
const siteTitle = "Blode Icons: open-source SVG icon library for React";

const siteDescription =
  "A free, open-source SVG icon library with 4,000+ outline and solid icons. Search, copy, and drop them into React with a Lucide-compatible package.";

export const metadata: Metadata = {
  alternates: {
    canonical: siteUrl,
  },
  appleWebApp: {
    title: "Blode Icons",
  },
  authors: [{ name: "Matthew Blode", url: "https://blode.co" }],
  creator: "Matthew Blode",
  description: siteDescription,
  metadataBase: new URL(siteUrl),
  openGraph: {
    description: siteDescription,
    locale: "en_US",
    // Rule 9: every blode.co path is one site. The product name is already in
    // og:title, so this is the only slot left to say who made the thing.
    siteName: "Matthew Blode",
    title: siteTitle,
    type: "website",
    // Never set `openGraph.url` here. It is not per-page, so every route
    // inherits the zone root and share cards collapse onto one URL. Absent
    // beats wrong: consumers fall back to the fetched URL, and
    // `alternates.canonical` is already per-page.
    // No `images` here: `app/opengraph-image.tsx` is the card. Next reuses it
    // for `twitter:image` too when there is no `twitter-image` file.
  },
  title: {
    default: siteTitle,
    template: "%s | Blode Icons",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@mattblode",
    description: siteDescription,
    title: siteTitle,
  },
  verification: {
    google: "mFwyBIbXTaKK4uF_NA0MzVWFyY40hPgBjFObg3rje04",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${glide.variable} ${glideMono.variable}`}
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <link href={process.env.NEXT_PUBLIC_POSTHOG_HOST} rel="preconnect" />
      </head>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <Providers>
          <div
            className="relative z-10 flex min-h-svh flex-col bg-background"
            data-slot="layout"
          >
            <SiteHeader />
            <main className="flex flex-1 flex-col">{children}</main>
            <SiteFooter />
          </div>
        </Providers>
      </body>
    </html>
  );
}
