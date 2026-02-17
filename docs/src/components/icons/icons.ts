import { kebabCase } from "change-case";
// biome-ignore lint/performance/noNamespaceImport: intentional - need all icon exports as an object to enumerate
import * as IconComponents from "@/icons-tsx";

const iconMetadataFiles = import.meta.glob("../../icons-data/*.json", {
  eager: true,
});

interface IconMetadata {
  category: string;
  tags: string[];
}

const metadataMap: Record<string, IconMetadata> = {};
for (const value of Object.values(iconMetadataFiles)) {
  const module = value as {
    default?: { icon?: string; category?: string; tags?: string[] };
    icon?: string;
    category?: string;
    tags?: string[];
  };
  const data = module.default || module;
  if (data.icon) {
    metadataMap[data.icon] = {
      category: data.category || "",
      tags: data.tags || [],
    };
  }
}

const ICON_NAME_REGEX = /FilledIcon$|Icon$/;

export const icons = Object.entries(IconComponents).map(([name, component]) => {
  const iconKey = kebabCase(name.replace(ICON_NAME_REGEX, ""), {
    separateNumbers: true,
  });
  const metadata = metadataMap[iconKey] || { category: "", tags: [] };

  return {
    name,
    component,
    category: metadata.category,
    tags: metadata.tags,
    categories: metadata.category ? [metadata.category] : [],
  };
});
