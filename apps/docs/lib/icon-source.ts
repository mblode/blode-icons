import type { IconCopyKind } from "@/lib/icon-types";

interface IconSourceRequest {
  copyKind: Exclude<IconCopyKind, "NAME">;
  iconName: string;
}

export const SOURCE_FORMAT_BY_KIND = {
  SVG: "svg",
  TSX: "tsx",
} as const;

export type IconSourceFormat = (typeof SOURCE_FORMAT_BY_KIND)[Exclude<
  IconCopyKind,
  "NAME"
>];

const VALID_ICON_NAME_PATTERN = /^[A-Za-z0-9-]+$/;

export const isValidIconName = (iconName: string) => {
  return VALID_ICON_NAME_PATTERN.test(iconName);
};

export const loadIconSource = async ({
  iconName,
  copyKind,
}: IconSourceRequest): Promise<string | null> => {
  if (!isValidIconName(iconName)) {
    return null;
  }

  const format = SOURCE_FORMAT_BY_KIND[copyKind];
  const response = await fetch(
    `/api/icons/${encodeURIComponent(iconName)}/${format}`,
    {
      cache: "force-cache",
    }
  );

  if (!response.ok) {
    return null;
  }

  return response.text();
};
