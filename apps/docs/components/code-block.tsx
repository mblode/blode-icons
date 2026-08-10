import { cacheLife } from "next/cache";
import { codeToHtml } from "shiki";

import { CopyButton } from "@/components/copy-button";

// Shiki reads the clock while it loads a grammar, which a prerender cannot do.
// The output is a pure function of the snippet and its language, so caching it
// both clears the error and stops every build re-highlighting the same code.
const highlight = async (code: string, lang: string): Promise<string> => {
  "use cache";
  cacheLife("max");

  return await codeToHtml(code, {
    defaultColor: false,
    lang,
    themes: {
      dark: "github-dark",
      light: "github-light",
    },
  });
};

export async function CodeBlock({
  code,
  lang = "tsx",
}: {
  code: string;
  lang?: string;
}) {
  const html = await highlight(code, lang);

  return (
    <div className="group relative overflow-hidden rounded-xl bg-code text-code-foreground">
      <div
        className="overflow-x-auto px-4 py-3.5 font-mono text-sm"
        // Shiki outputs sanitized HTML.
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <CopyButton value={code} />
    </div>
  );
}
