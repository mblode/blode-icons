import { kebabCase, sentenceCase } from "change-case";
import Fuse from "fuse.js";
import React, { useCallback, useMemo, useState } from "react";
import { toast } from "sonner";
import { LogoWordmarkIcon, MagnifyingGlassIcon } from "@/icons-tsx";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { LogoIcon } from "../ui/logo-icon";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { icons } from "./icons";

export type IconStyle = "OUTLINE" | "SOLID";
export type CopyKind = "SVG" | "NAME" | "TSX";

export const IconSearch = () => {
  const [iconStyle, setIconStyle] = useState<IconStyle>("OUTLINE");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(icons);

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);

    if (query.trim() === "") {
      // If the search query is empty, show all icons
      setSearchResults(icons);
    } else {
      // Perform search using Fuse.js
      const fuse = new Fuse(icons, {
        keys: [
          { name: "name", weight: 0.6 },
          { name: "tags", weight: 0.3 },
          { name: "categories", weight: 0.1 },
        ],
        threshold: 0.3,
        ignoreLocation: true,
        useExtendedSearch: true,
        sortFn: (a, b) => a.score - b.score,
        getFn: (obj, path) => {
          // Handle arrays better (for tags)
          const value = Fuse.config.getFn(obj, path);
          if (Array.isArray(value)) {
            return value.join(" ");
          }
          return value;
        },
      });
      const results = fuse.search(query);
      setSearchResults(results.map((result) => result.item));
    }
  }, []);

  const handleIconClick = useCallback(
    async (icon: (typeof icons)[number], copyKind: CopyKind) => {
      let value = "";
      let label = "";

      const fileName = kebabCase(icon.name.replace("Icon", ""), {
        separateNumbers: true,
      });

      try {
        if (copyKind === "SVG") {
          const svgFile = await import(`../../icons-svg/${fileName}.svg?raw`);
          value = svgFile.default;
          label = "SVG";
        } else if (copyKind === "TSX") {
          const tsxFile = await import(`../../icons-tsx/${fileName}.tsx?raw`);
          value = tsxFile.default;
          label = "TSX";
        } else if (copyKind === "NAME") {
          value = icon.name;
          label = "name";
        }

        navigator.clipboard.writeText(value);
        // Optionally, show a toast or notification indicating the icon name has been copied
        toast(
          `"${sentenceCase(icon.name.replace("Icon", ""))}" ${label} copied to clipboard`
        );
      } catch (error) {
        console.error("Error loading file:", error);
        toast.error(`Failed to copy ${icon.name}`);
      }
    },
    []
  );

  const filteredIcons = useMemo(
    () =>
      searchResults.filter((icon) => {
        if (iconStyle === "OUTLINE") {
          return !icon.name.includes("Filled");
        }
        return icon.name.includes("Filled");
      }),
    [iconStyle, searchResults]
  );

  return (
    <>
      <header className="container mb-2">
        <a
          className="flex space-x-1 xs:space-x-[5px]"
          href="https://fingertip.com"
        >
          <LogoIcon className="h-[19.2px] xs:h-[24px] w-[23.376px] xs:w-[29.22px] shrink-0" />
          <LogoWordmarkIcon className="relative top-[4px] h-[16px] xs:h-[20px] w-[97.566px] xs:w-[121.957px] shrink-0" />
        </a>
      </header>

      <div className="sticky top-0 z-10 mb-4 border-border border-b bg-background py-4 shadow-md">
        <div className="container">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative w-full">
              <Input
                className="w-full pl-10"
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search all icons..."
                type="search"
                value={searchQuery}
              />
              <MagnifyingGlassIcon className="absolute top-1/2 left-3 size-5 -translate-y-1/2" />
            </div>

            <Tabs
              className="w-full sm:w-auto"
              onValueChange={(value) => setIconStyle(value as IconStyle)}
              value={iconStyle}
            >
              <TabsList className="w-full sm:w-auto">
                <TabsTrigger className="w-full sm:w-auto" value="OUTLINE">
                  {" "}
                  <div className="mr-2 size-2 rounded-full border border-foreground" />
                  Outline
                </TabsTrigger>
                <TabsTrigger className="w-full sm:w-auto" value="SOLID">
                  {" "}
                  <div className="mr-2 size-2 rounded-full border border-foreground bg-foreground" />
                  Solid
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
      </div>

      <div className="container pb-12">
        <div className="grid grid-cols-2 gap-2 gap-y-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {filteredIcons.map((icon) => (
            <div className="" key={icon.name}>
              <div className="group relative flex h-[104px] flex-col items-center justify-center overflow-hidden rounded-xl border border-border px-2">
                {React.createElement(icon.component)}

                <div className="absolute inset-0 flex size-full flex-col gap-2 p-2 opacity-0 group-hover:opacity-100">
                  <Button
                    className="h-full w-full"
                    onClick={() => handleIconClick(icon, "SVG")}
                    variant="secondary"
                  >
                    Copy SVG
                  </Button>

                  <Button
                    className="h-full w-full"
                    onClick={() => handleIconClick(icon, "NAME")}
                    variant="secondary"
                  >
                    Copy name
                  </Button>
                </div>
              </div>

              <span className="mt-2 line-clamp-2 text-center text-muted-foreground text-xs">
                {icon.name.replace("Icon", "")}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
