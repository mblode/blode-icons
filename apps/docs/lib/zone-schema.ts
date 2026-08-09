import { siteConfig, siteUrl } from "@/lib/config";

/**
 * Structured data for this zone. The contract lives in
 * `blode-co/apps/web/.claude/knowledge/zone-conventions.md`.
 *
 * blode.co/icons is a path on blode.co, not a site of its own, so nothing here
 * defines a Person, WebSite or Organization. It references the ones blode.co
 * already publishes, by `@id`. A second `#person` on the same domain splits the
 * entity: search engines see two people rather than one.
 */
const host = "https://blode.co";

const personId = `${host}/#person`;
const websiteId = `${host}/#website`;
const orgId = `${host}/#organization`;

const softwareId = `${siteUrl}/#software`;
const webPageId = `${siteUrl}/#webpage`;
const breadcrumbId = `${siteUrl}/#breadcrumb`;

const name = "Blode Icons";
const description =
  "A free, open-source SVG icon library with 4,000+ outline and solid icons. Search, copy, and drop them into React with a Lucide-compatible package.";

/** Emitted on the zone root only, where the WebPage and breadcrumb are true. */
export const zoneRootJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@id": webPageId,
      "@type": "WebPage",
      about: { "@id": softwareId },
      breadcrumb: { "@id": breadcrumbId },
      description,
      inLanguage: "en-US",
      isPartOf: { "@id": websiteId },
      name,
      url: siteUrl,
    },
    {
      "@id": softwareId,
      "@type": "SoftwareSourceCode",
      author: { "@id": personId },
      codeRepository: siteConfig.links.github,
      description,
      name,
      programmingLanguage: "TypeScript",
      publisher: { "@id": orgId },
      url: siteUrl,
    },
    {
      "@id": breadcrumbId,
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          item: `${host}/`,
          // Rule 4: "Matthew Blode", never "Home", and identical to the visible
          // trail in `components/zone-breadcrumb.tsx`. Google reads a mismatch
          // between the two as a markup error.
          name: "Matthew Blode",
          position: 1,
        },
        {
          "@type": "ListItem",
          item: `${host}/projects`,
          name: "Projects",
          position: 2,
        },
        { "@type": "ListItem", item: siteUrl, name, position: 3 },
      ],
    },
  ],
};
