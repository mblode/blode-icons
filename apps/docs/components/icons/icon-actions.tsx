"use client";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { downloadSvg } from "@/lib/icon-download";
import ArrowDownWallIcon from "@/src/icons-tsx/arrow-down-wall";

/**
 * Copy and download for one style of one icon.
 *
 * The sources are props, not fetches: the page already read them off disk to
 * render the previews, so every action here is synchronous and works offline.
 */
export const IconActions = ({
  componentName,
  slug,
  svg,
  tsx,
}: {
  componentName: string;
  slug: string;
  svg: string | null;
  tsx: string | null;
}) => {
  const copy = async (label: string, value: string | null) => {
    if (!value) {
      toast.error(`No ${label} for ${componentName}`);
      return;
    }
    try {
      await navigator.clipboard.writeText(value);
      toast(`${componentName} ${label} copied to clipboard`);
    } catch {
      toast.error(`Failed to copy ${componentName} ${label}`);
    }
  };

  return (
    <div className="flex flex-wrap gap-2">
      <Button onClick={() => copy("SVG", svg)} size="sm" variant="outline">
        Copy SVG
      </Button>
      <Button onClick={() => copy("TSX", tsx)} size="sm" variant="outline">
        Copy TSX
      </Button>
      <Button
        onClick={() => copy("name", componentName)}
        size="sm"
        variant="outline"
      >
        Copy name
      </Button>
      <Button
        disabled={!svg}
        onClick={() => svg && downloadSvg(slug, svg)}
        size="sm"
        variant="outline"
      >
        <ArrowDownWallIcon aria-hidden="true" />
        Download
      </Button>
    </div>
  );
};
