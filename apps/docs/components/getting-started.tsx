import type { ReactNode } from "react";

import { CodeBlock } from "@/components/code-block";
import { CopyPromptButton } from "@/components/copy-prompt-button";
import { InstallTabs } from "@/components/install-tabs";
import { asset } from "@/lib/config";

const USAGE_EXAMPLE = `import { SearchIcon, Search } from "blode-icons-react";

export function Example() {
  return (
    <>
      <SearchIcon size={24} />
      <Search size={20} strokeWidth={1.5} />
    </>
  );
}`;

const MCP_EXAMPLE = `{
  "mcpServers": {
    "blode-icons": {
      "url": "https://blode.co/icons/mcp"
    }
  }
}`;

const AGENT_PROMPT = `Use Blode Icons in this project.

Install:
npm install blode-icons-react

Import React icons from the package root. Prefer *Icon names; verified Lucide aliases (no suffix) also work:
import { SearchIcon, Search } from "blode-icons-react";

Props match lucide-react: size, color, strokeWidth, absoluteStrokeWidth.

For agents:
- MCP: https://blode.co/icons/mcp (tools: search_icons, get_icon, get_usage)
- Skill: npx skills add mblode/blode-icons -g --all -y
- Summary: https://blode.co/icons/llms.txt

APIs are public — no auth. Prefer npm install over copying source.`;

function Step({
  n,
  title,
  children,
}: {
  n: number;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-[2rem_1fr]">
      <div
        aria-hidden="true"
        className="flex size-8 items-center justify-center rounded-full bg-muted font-medium text-sm"
      >
        {n}
      </div>
      <div className="min-w-0">
        <h2 className="font-medium text-base">{title}</h2>
        <div className="mt-2 space-y-3 text-muted-foreground text-sm leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

export function GettingStarted() {
  return (
    <section className="mx-auto w-full max-w-3xl px-4 py-8">
      <div className="rounded-2xl border bg-background p-6 sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h1 className="font-semibold text-xl tracking-tight">Install</h1>
            <p className="mt-1 text-muted-foreground text-sm">
              MIT-licensed React icons. Lucide-compatible names and props.
            </p>
          </div>
          <CopyPromptButton prompt={AGENT_PROMPT} />
        </div>

        <div className="mt-8 space-y-10">
          <Step n={1} title="Add the package">
            <p>Install once, then import only the icons you use.</p>
            <InstallTabs />
          </Step>

          <Step n={2} title="Drop an icon into your UI">
            <p>
              Prefer <code className="text-foreground">*Icon</code> names.
              Verified Lucide aliases like{" "}
              <code className="text-foreground">Search</code> work too — names
              without a real Blode match are left out on purpose.
            </p>
            <CodeBlock code={USAGE_EXAMPLE} />
            <p>
              Props: <code className="text-foreground">size</code>,{" "}
              <code className="text-foreground">color</code>,{" "}
              <code className="text-foreground">strokeWidth</code>,{" "}
              <code className="text-foreground">absoluteStrokeWidth</code>.
            </p>
          </Step>

          <Step n={3} title="Point your agent at Blode">
            <p>
              Paste this into Cursor, Claude Code, or any MCP client. Then{" "}
              <code className="text-foreground">search_icons</code> →{" "}
              <code className="text-foreground">get_icon</code>.
            </p>
            <CodeBlock code={MCP_EXAMPLE} lang="json" />
            <p>
              Or install the skill:{" "}
              <code className="text-foreground">
                npx skills add mblode/blode-icons -g --all -y
              </code>
              . More in{" "}
              <a
                className="text-foreground underline underline-offset-2"
                href={asset("/llms.txt")}
              >
                llms.txt
              </a>
              .
            </p>
          </Step>
        </div>
      </div>
    </section>
  );
}
