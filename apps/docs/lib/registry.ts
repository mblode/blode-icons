import "server-only";
import { siteUrl } from "@/lib/config";
import { getAllSearchDocs, preferredLucideAlias } from "@/lib/icon-search";
import { readIconSource } from "@/lib/icon-source-server";

export interface RegistryItem {
  $schema: string;
  dependencies: string[];
  description: string;
  files: {
    content: string;
    path: string;
    target: string;
    type: "registry:ui";
  }[];
  name: string;
  title: string;
  type: "registry:ui";
}

export async function buildRegistryItem(
  slug: string
): Promise<RegistryItem | null> {
  const doc = getAllSearchDocs().find((item) => item.slug === slug);
  if (!doc) {
    return null;
  }

  // Ensure the icon exists as a source file before advertising it.
  const tsx = await readIconSource(slug, "tsx");
  if (!tsx) {
    return null;
  }

  const alias = preferredLucideAlias(doc.lucideAliases);
  const namedExports = alias ? `${doc.name}, ${alias}` : doc.name;

  // Thin wrapper that re-exports from the npm package (tree-shake friendly).
  const content = `export { ${namedExports} } from "blode-icons-react";
export { ${doc.name} as default } from "blode-icons-react";
`;

  return {
    $schema: "https://ui.shadcn.com/schema/registry-item.json",
    dependencies: ["blode-icons-react"],
    description: `Blode icon \`${doc.slug}\` (${doc.name}). MIT licensed.`,
    files: [
      {
        content,
        path: `components/icons/${doc.slug}.tsx`,
        target: `@ui/icons/${doc.slug}.tsx`,
        type: "registry:ui",
      },
    ],
    name: doc.slug,
    title: doc.title,
    type: "registry:ui",
  };
}

export function buildRegistryIndex() {
  return {
    $schema: "https://ui.shadcn.com/schema/registry.json",
    homepage: siteUrl,
    items: getAllSearchDocs().map((icon) => ({
      description: `Blode icon ${icon.slug}`,
      name: icon.slug,
      title: icon.title,
      type: "registry:ui",
    })),
    name: "blode-icons",
  };
}
