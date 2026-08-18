import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CodeBlock } from "@/components/code-block";
import { IconActions } from "@/components/icons/icon-actions";
import { GLYPH_SIZES, IconGlyph } from "@/components/icons/icon-glyph";
import { asset, siteUrl } from "@/lib/config";
import { categoryToSlug, UNCATEGORIZED } from "@/lib/icon-categories";
import { getAllIconSlugs, getIconDetail } from "@/lib/icon-detail";
import { getIconDisplayName, preferredLucideAlias } from "@/lib/icon-search";

/**
 * Every icon is prerendered at build.
 *
 * There are 2,139 of them and the content is entirely build-time: the search
 * index is a committed JSON file and the previews are SVG files in the deploy.
 * Nothing about a detail page can change between requests, so there is nothing
 * for a runtime render to compute — it would re-read the same three files off
 * disk on every hit. These pages are also the long-tail search surface ("kanban
 * icon"), where a prerendered document is what a crawler should get.
 *
 * There is no `dynamicParams = false`: `cacheComponents` rejects that segment
 * config. The 404 comes from the page instead, which matters because this
 * route sits at the zone root and would otherwise render something for every
 * mistyped URL under /icons.
 *
 * `instant = false` because the whole page is the slug: there is no shell to
 * paint before `params` resolves, so an instant shell would be a blank frame
 * followed by the real page. The route is prerendered, so blocking on it costs
 * a cache read.
 */
export const instant = false;

export function generateStaticParams() {
  return getAllIconSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const detail = await getIconDetail(slug);
  if (!detail) {
    return {};
  }

  const { doc } = detail;
  const name = getIconDisplayName(doc.name);
  const title = `${name} icon`;
  const styles = doc.hasFilled ? "outline and filled" : "outline";
  const description = `The ${name} icon from Blode Icons, in ${styles}, free under MIT. Copy the SVG, download it, or import ${doc.name} from blode-icons-react.`;
  const pageUrl = `${siteUrl}/${doc.slug}`;

  return {
    alternates: { canonical: pageUrl },
    description,
    openGraph: {
      description,
      // Restate the house card: declaring `openGraph` opts the page out of the
      // root file-convention injection.
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

const Chip = ({ children }: { children: React.ReactNode }) => (
  <span className="rounded-md bg-muted px-2 py-1 text-muted-foreground text-xs">
    {children}
  </span>
);

const Field = ({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) => (
  <div className="border-border border-t py-4 sm:grid sm:grid-cols-[10rem_1fr] sm:gap-4">
    <dt className="font-medium text-sm">{label}</dt>
    <dd className="mt-2 text-sm sm:mt-0">{children}</dd>
  </div>
);

export default async function IconPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const detail = await getIconDetail(slug);

  if (!detail) {
    notFound();
  }

  const { doc, importSnippet, variants } = detail;
  const name = getIconDisplayName(doc.name);
  const categoryName = doc.category || UNCATEGORIZED;
  const alias = preferredLucideAlias(doc.lucideAliases);

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-8">
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
          href={asset(`/categories/${categoryToSlug(categoryName)}`)}
        >
          {categoryName}
        </a>
        <span aria-hidden="true">/</span>
        <span className="text-foreground">{name}</span>
      </nav>

      <h1 className="mt-4 font-semibold text-2xl tracking-tight">
        {name} icon
      </h1>
      <p className="mt-1 text-muted-foreground text-sm">
        Drawn on a 24x24 grid with a 2px stroke. MIT licensed.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {variants.map((variant) => (
          <section
            className="rounded-2xl border border-border p-5"
            key={variant.slug}
          >
            <h2 className="font-medium text-sm">{variant.label}</h2>
            <code className="mt-1 block font-mono text-muted-foreground text-xs">
              {variant.componentName}
            </code>

            {/*
              The whole point of the page: the same glyph at the sizes it will
              actually ship at, so a mark that closes up at 12px is visible
              here rather than in someone's toolbar.
            */}
            <div className="mt-5 flex flex-wrap items-end gap-4">
              {GLYPH_SIZES.map((size) => (
                <div className="flex flex-col items-center gap-2" key={size}>
                  <div className="flex h-8 items-end">
                    <IconGlyph markup={variant.svg} size={size} />
                  </div>
                  <span className="text-muted-foreground text-xs">{size}</span>
                </div>
              ))}
            </div>

            <div className="mt-5">
              <IconActions
                componentName={variant.componentName}
                slug={variant.slug}
                svg={variant.svg}
                tsx={variant.tsx}
              />
            </div>
          </section>
        ))}

        {doc.hasFilled ? null : (
          <section className="flex flex-col justify-center rounded-2xl border border-border border-dashed p-5">
            <h2 className="font-medium text-sm">Filled</h2>
            <p className="mt-1 text-muted-foreground text-sm">
              This icon has no filled variant. The Solid filter on the search
              page hides it rather than showing the outline art twice.
            </p>
          </section>
        )}
      </div>

      <div className="mt-8">
        <h2 className="mb-3 font-medium text-sm">Import</h2>
        <CodeBlock code={importSnippet} />
        {alias ? (
          <p className="mt-3 text-muted-foreground text-sm">
            The Lucide alias <code className="text-foreground">{alias}</code>{" "}
            resolves to the same component, so a lucide-react import keeps
            working after the swap.
          </p>
        ) : null}
      </div>

      <dl className="mt-8 border-border border-b">
        <Field label="Slug">
          <code className="font-mono text-xs">{doc.slug}</code>
        </Field>
        <Field label="Category">
          <a
            className="underline underline-offset-2 hover:text-muted-foreground"
            href={asset(`/categories/${categoryToSlug(categoryName)}`)}
          >
            {categoryName}
          </a>
        </Field>
        <Field label="Tags">
          {doc.tags.length > 0 ? (
            <div className="flex flex-wrap gap-1.5">
              {doc.tags.map((tag) => (
                <Chip key={tag}>{tag}</Chip>
              ))}
            </div>
          ) : (
            <span className="text-muted-foreground">
              None yet. Search still finds this icon by its name and category.
            </span>
          )}
        </Field>
        <Field label="Lucide aliases">
          {doc.lucideAliases.length > 0 ? (
            <div className="flex flex-wrap gap-1.5">
              {doc.lucideAliases.map((lucideAlias) => (
                <Chip key={lucideAlias}>
                  <code className="font-mono">{lucideAlias}</code>
                </Chip>
              ))}
            </div>
          ) : (
            <span className="text-muted-foreground">
              None. Only names with a verified match are aliased, so an import
              that resolves always draws the right thing.
            </span>
          )}
        </Field>
      </dl>
    </div>
  );
}
