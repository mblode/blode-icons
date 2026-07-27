import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";

import { Providers } from "@/components/providers";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { asset, siteUrl } from "@/lib/config";

import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const glide = localFont({
  display: "swap",
  src: [{ path: "../public/fonts/Glide-Variable.woff2" }],
  variable: "--font-glide",
  weight: "400 900",
});

export const viewport: Viewport = {
  initialScale: 1,
  themeColor: [
    { color: "#ffffff", media: "(prefers-color-scheme: light)" },
    { color: "#09090b", media: "(prefers-color-scheme: dark)" },
  ],
  width: "device-width",
};

const siteDescription =
  "A free, open-source SVG icon library with 2,000+ outline and solid icons. Search, copy, and drop them into React with a Lucide-compatible package.";

export const metadata: Metadata = {
  alternates: {
    canonical: siteUrl,
  },
  description: siteDescription,
  icons: {
    apple: [{ sizes: "180x180", url: asset("/apple-touch-icon.png") }],
    icon: [
      { url: asset("/favicon.ico") },
      { type: "image/svg+xml", url: asset("/favicon.svg") },
      {
        sizes: "96x96",
        type: "image/png",
        url: asset("/favicon-96x96.png"),
      },
    ],
  },
  manifest: asset("/site.webmanifest"),
  metadataBase: new URL(siteUrl),
  openGraph: {
    description: siteDescription,
    images: [{ url: "/opengraph-image" }],
    locale: "en_US",
    siteName: "Blode Icons",
    title: "Blode Icons — Open-Source SVG Icon Library for React",
    type: "website",
    url: siteUrl,
  },
  title: {
    default: "Blode Icons — Open-Source SVG Icon Library for React",
    template: "%s - Blode Icons",
  },
  twitter: {
    card: "summary_large_image",
    description: siteDescription,
    images: ["/twitter-image"],
    title: "Blode Icons — Open-Source SVG Icon Library for React",
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
      className={`${geistSans.variable} ${geistMono.variable} ${glide.variable}`}
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <link href="https://r.blode.co" rel="preconnect" />
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
