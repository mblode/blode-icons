import { codeToHtml } from "shiki";
import { CopyButton } from "@/components/copy-button";

export async function CodeBlock({
  code,
  lang = "tsx",
}: {
  code: string;
  lang?: string;
}) {
  const html = await codeToHtml(code, {
    lang,
    themes: {
      light: "github-light",
      dark: "github-dark",
    },
    defaultColor: false,
  });

  return (
    <div className="group relative overflow-hidden rounded-xl bg-code text-code-foreground">
      <div
        className="overflow-x-auto px-4 py-3.5 font-mono text-sm"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: shiki outputs sanitized HTML
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <CopyButton value={code} />
    </div>
  );
}
