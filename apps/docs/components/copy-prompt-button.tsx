"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
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
      onClick={() => {
        navigator.clipboard.writeText(prompt);
        setHasCopied(true);
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
