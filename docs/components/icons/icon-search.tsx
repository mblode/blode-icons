"use client";

import { Search } from "lucide-react";
import React, { useMemo, useState } from "react";
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
import { toast } from "sonner";

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
    [searchQuery]
  );
  const filteredIcons = useMemo(
    () => filterIconsByStyle(searchResults, iconStyle),
    [iconStyle, searchResults]
  );

  const handleIconCopy = async (
    icon: (typeof icons)[number],
    copyKind: IconCopyKind
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
        `"${getIconDisplayName(icon.name)}" ${COPY_KIND_LABEL[copyKind]} copied to clipboard`
      );
    } catch {
      toast.error(`Failed to copy ${icon.name}`);
    }
  };

  return (
    <>
      <header className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-4">
        <a
          className="font-semibold text-lg underline-offset-2 hover:underline"
          href="https://blode.co"
        >
          Blode Icons
        </a>
        <a
          className="text-muted-foreground text-sm underline-offset-2 hover:text-foreground hover:underline"
          href="https://github.com/mblode/blode-icons"
          rel="noopener"
          target="_blank"
        >
          GitHub
        </a>
      </header>

      <div className="sticky top-0 z-10 mb-4 border-border border-b bg-background py-4 shadow-md">
        <div className="mx-auto w-full max-w-[1400px] px-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative w-full">
              <Input
                className="w-full pl-10"
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search all icons..."
                type="search"
                value={searchQuery}
              />
              <Search className="absolute top-1/2 left-3 size-5 -translate-y-1/2" />
            </div>

            <Tabs
              className="w-full sm:w-auto"
              onValueChange={(value) => setIconStyle(value as IconStyle)}
              value={iconStyle}
            >
              <TabsList className="w-full sm:w-auto">
                <TabsTrigger className="w-full sm:w-auto" value="OUTLINE">
                  <div className="mr-2 size-2 rounded-full border border-foreground" />
                  Outline
                </TabsTrigger>
                <TabsTrigger className="w-full sm:w-auto" value="SOLID">
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
                      className="h-full w-full cursor-pointer"
                      onClick={() => void handleIconCopy(icon, "SVG")}
                      variant="secondary"
                    >
                      Copy SVG
                    </Button>

                    <Button
                      className="h-full w-full cursor-pointer"
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
