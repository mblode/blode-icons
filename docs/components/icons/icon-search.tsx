"use client";

import { useMemo, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  filterIconsByStyle,
  getIconDisplayName,
  searchIcons,
} from "@/lib/icon-search";
import { loadIconSource } from "@/lib/icon-source";
import type { IconCopyKind, IconStyle } from "@/lib/icon-types";
import { icons } from "@/lib/icons";
import MagnifyingGlassIcon from "@/src/icons-tsx/magnifying-glass";

const COPY_KIND_LABEL: Record<IconCopyKind, string> = {
  SVG: "SVG",
  NAME: "name",
  TSX: "TSX",
};

export const IconSearch = () => {
  const [iconStyle, setIconStyle] = useState<IconStyle>("OUTLINE");
  const [searchQuery, setSearchQuery] = useState("");

  const searchResults = useMemo(
    () => searchIcons(icons, searchQuery),
    [searchQuery],
  );
  const filteredIcons = useMemo(
    () => filterIconsByStyle(searchResults, iconStyle),
    [iconStyle, searchResults],
  );

  const handleIconCopy = async (
    icon: (typeof icons)[number],
    copyKind: IconCopyKind,
  ) => {
    try {
      const value =
        copyKind === "NAME"
          ? icon.name
          : await loadIconSource({ iconName: icon.name, copyKind });

      if (!value) {
        toast.error(`Failed to copy ${icon.name}`);
        return;
      }

      await navigator.clipboard.writeText(value);
      toast(
        `"${getIconDisplayName(icon.name)}" ${COPY_KIND_LABEL[copyKind]} copied to clipboard`,
      );
    } catch {
      toast.error(`Failed to copy ${icon.name}`);
    }
  };

  return (
    <>
      <div className="relative sticky top-0 z-10 mb-4 bg-background py-4">
        <div className="absolute right-0 bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="mx-auto w-full max-w-[1400px] px-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Input
              className="w-full pl-10"
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search all icons..."
              type="search"
              value={searchQuery}
              leftAddon={
                <MagnifyingGlassIcon className="absolute top-1/2 left-4 size-4 -translate-y-1/2" />
              }
              autoFocus
            />

            <Tabs
              className="w-full sm:w-auto h-[52px]!"
              onValueChange={(value) => setIconStyle(value as IconStyle)}
              value={iconStyle}
            >
              <TabsList className="w-full sm:w-auto h-[52px]!">
                <TabsTrigger className="w-full sm:w-auto px-4" value="OUTLINE">
                  <div className="mr-2 size-2 rounded-full border border-foreground" />
                  Outline
                </TabsTrigger>
                <TabsTrigger className="w-full sm:w-auto px-4" value="SOLID">
                  <div className="mr-2 size-2 rounded-full border border-foreground bg-foreground" />
                  Solid
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1400px] px-4 pb-12">
        <div className="grid grid-cols-2 gap-2 gap-y-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {filteredIcons.map((icon) => {
            const IconComponent = icon.component;

            return (
              <div key={icon.name}>
                <div className="group relative flex h-[104px] flex-col items-center justify-center overflow-hidden rounded-xl border border-border px-2">
                  <IconComponent />

                  <div className="absolute inset-0 flex size-full flex-col gap-2 p-2 opacity-0 group-hover:opacity-100">
                    <Button
                      className="flex-1 w-full cursor-pointer"
                      onClick={() => void handleIconCopy(icon, "SVG")}
                      variant="secondary"
                    >
                      Copy SVG
                    </Button>

                    <Button
                      className="flex-1 w-full cursor-pointer"
                      onClick={() => void handleIconCopy(icon, "NAME")}
                      variant="secondary"
                    >
                      Copy name
                    </Button>
                  </div>
                </div>

                <span className="mt-2 line-clamp-2 text-center text-muted-foreground text-xs">
                  {getIconDisplayName(icon.name)}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
