import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { IconLinkGrid } from "@/components/icons/icon-link-grid";
import { asset, siteUrl } from "@/lib/config";
import { getIconCategories, getIconCategory } from "@/lib/icon-categories";

/**
 * 40 categories, all known at build from the committed search index. Same
 * reasoning as the icon pages: nothing here can change per request. An unknown
 * slug 404s from the page body, since `cacheComponents` rejects
 * `dynamicParams`.
 *
 * `instant = false` for the same reason as the icon pages: the entire body is
 * derived from the param, so there is no shell worth painting first.
 */
export const instant = false;

export function generateStaticParams() {
  return getIconCategories().map((category) => ({ category: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getIconCategory(slug);
  if (!category) {
    return {};
  }

  const title = `${category.name} icons`;
  const description = `${category.count} ${category.name} icons from Blode Icons, free under MIT. Outline and filled, ready to copy or import from blode-icons-react.`;
  const pageUrl = `${siteUrl}/categories/${category.slug}`;

  return {
    alternates: { canonical: pageUrl },
    description,
    openGraph: {
      description,
      images: [{ url: "/opengraph-image" }],
      locale: "en_US",
      siteName: "Matthew Blode",
      title,
      type: "article",
      url: pageUrl,
    },
    title,
    twitter: {
      card: "summary_large_image",
      creator: "@mattblode",
      description,
      images: ["/opengraph-image"],
      title,
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: slug } = await params;
  const category = getIconCategory(slug);

  if (!category) {
    notFound();
  }

  return (
    <div className="mx-auto w-full max-w-[1400px] px-4 py-8">
      <nav
        aria-label="Breadcrumb"
        className="flex flex-wrap items-center gap-1.5 text-muted-foreground text-sm"
      >
        <a className="hover:text-foreground hover:underline" href={asset("/")}>
          Icons
        </a>
        <span aria-hidden="true">/</span>
        <a
          className="hover:text-foreground hover:underline"
          href={asset("/categories")}
        >
          Categories
        </a>
        <span aria-hidden="true">/</span>
        <span className="text-foreground">{category.name}</span>
      </nav>

      <h1 className="mt-4 font-semibold text-2xl tracking-tight">
        {category.name}
      </h1>
      <p className="mt-1 text-muted-foreground text-sm">
        {category.count} {category.count === 1 ? "icon" : "icons"}.
      </p>

      <div className="mt-8">
        <IconLinkGrid slugs={category.icons.map((doc) => doc.slug)} />
      </div>
    </div>
  );
}
