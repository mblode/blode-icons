"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { copyIconContent } from "@/lib/conversion-events";
import { cn } from "@/lib/utils";
import CheckIcon from "@/src/icons-tsx/check";
import ClipboardIcon from "@/src/icons-tsx/clipboard";

export function CopyButton({
  value,
  className,
  ...props
}: React.ComponentProps<typeof Button> & {
  value: string;
}) {
  const [hasCopied, setHasCopied] = useState(false);

  useEffect(() => {
    if (hasCopied) {
      const timer = setTimeout(() => setHasCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [hasCopied]);

  return (
    <Button
      className={cn(
        "absolute top-2 right-2 z-10 size-7 bg-code opacity-70 hover:opacity-100 focus-visible:opacity-100",
        className
      )}
      onClick={async () => {
        try {
          await copyIconContent(value, "copy-code", "docs");
          setHasCopied(true);
        } catch {
          toast.error("Could not copy. Select the code and copy it manually.");
        }
      }}
      size="icon"
      variant="ghost"
      {...props}
    >
      <span className="sr-only">Copy</span>
      {hasCopied ? (
        <CheckIcon className="size-4" />
      ) : (
        <ClipboardIcon className="size-4" />
      )}
    </Button>
  );
}
