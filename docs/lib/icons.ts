import { kebabCase } from "change-case";
import * as IconComponents from "@/src/icons-tsx";
import { getIconMetadata } from "@/lib/icon-data";
import type { IconRecord } from "@/lib/icon-types";

const ICON_NAME_REGEX = /FilledIcon$|Icon$/;

const isIconComponent = (
  name: string,
  component: unknown
): component is IconRecord["component"] => {
  return name.endsWith("Icon") && component !== null && component !== undefined;
};

const seenComponents = new Set<unknown>();

export const icons: IconRecord[] = Object.entries(IconComponents)
  .filter(([name, component]) => {
    if (!isIconComponent(name, component)) {
      return false;
    }

    if (seenComponents.has(component)) {
      return false;
    }

    seenComponents.add(component);
    return true;
  })
  .map(([name, component]) => {
    const iconSlug = kebabCase(name.replace(ICON_NAME_REGEX, ""), {
      separateNumbers: true,
    });
    const metadata = getIconMetadata(iconSlug);

    return {
      name,
      component,
      category: metadata.category,
      tags: metadata.tags,
      categories: metadata.category ? [metadata.category] : [],
    };
  });
