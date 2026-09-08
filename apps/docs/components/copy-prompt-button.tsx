"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { copyIconContent } from "@/lib/conversion-events";
import CheckIcon from "@/src/icons-tsx/check";
import ClipboardIcon from "@/src/icons-tsx/clipboard";

export function CopyPromptButton({ prompt }: { prompt: string }) {
  const [hasCopied, setHasCopied] = useState(false);

  useEffect(() => {
    if (!hasCopied) {
      return;
    }
    const timer = setTimeout(() => setHasCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [hasCopied]);

  return (
    <Button
      onClick={async () => {
        try {
          await copyIconContent(prompt, "copy-install-prompt", "docs");
          setHasCopied(true);
        } catch {
          toast.error(
            "Could not copy. Select the prompt and copy it manually."
          );
        }
      }}
      size="sm"
      type="button"
      variant="outline"
    >
      {hasCopied ? (
        <CheckIcon data-icon="inline-start" />
      ) : (
        <ClipboardIcon data-icon="inline-start" />
      )}
      {hasCopied ? "Copied" : "Copy prompt"}
    </Button>
  );
}
