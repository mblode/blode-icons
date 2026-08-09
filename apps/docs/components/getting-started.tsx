import { CodeBlock } from "@/components/code-block";
import { InstallTabs } from "@/components/install-tabs";
import { asset } from "@/lib/config";

const USAGE_EXAMPLE = `import { SearchIcon, PlusIcon } from "blode-icons-react";

<SearchIcon size={32} />
<PlusIcon color="red" strokeWidth={1.5} />`;

const LUCIDE_EXAMPLE = `// Lucide-compatible names (drop-in replacement)
import { ChevronDown, Search, Plus } from "blode-icons-react";

// Full library names (with Icon suffix)
import { ChevronDownIcon, SparkleIcon } from "blode-icons-react";`;

const DYNAMIC_EXAMPLE = `import { DynamicIcon } from "blode-icons-react/dynamic";

<DynamicIcon
  name="SearchIcon"
  size={24}
  fallback={<span>Loading...</span>}
/>`;

const MCP_EXAMPLE = `# Cursor / Claude Code / other MCP clients
{
  "mcpServers": {
    "blode-icons": {
      "url": "https://blode.co/icons/mcp"
    }
  }
}`;

const REGISTRY_EXAMPLE = `# Single icon (package-backed re-export)
npx shadcn@latest add https://blode.co/icons/r/magnifying-glass.json

# Or configure once in components.json
{
  "registries": {
    "@blode": "https://blode.co/icons/r/{name}.json"
  }
}`;

export function GettingStarted() {
  return (
    <section className="mx-auto w-full max-w-3xl px-4 py-8">
      <h1 className="font-semibold text-lg">Installation</h1>
      <div className="mt-3">
        <InstallTabs />
      </div>

      <h2 className="mt-10 font-semibold text-lg">Usage</h2>
      <p className="mt-1 text-muted-foreground text-sm">
        Import icons by name and use them as React components.
      </p>
      <div className="mt-3">
        <CodeBlock code={USAGE_EXAMPLE} />
      </div>

      <h2 className="mt-10 font-semibold text-lg">Lucide Compatibility</h2>
      <p className="mt-1 text-muted-foreground text-sm">
        Drop-in replacement for lucide-react. Same names, same props — including
        historical aliases like{" "}
        <code className="text-foreground">AlertCircle</code>.
      </p>
      <div className="mt-3">
        <CodeBlock code={LUCIDE_EXAMPLE} />
      </div>

      <h2 className="mt-10 font-semibold text-lg">Props</h2>
      <p className="mt-1 text-muted-foreground text-sm">
        All icons accept the same props as lucide-react.
      </p>
      <div className="mt-3 overflow-x-auto rounded-xl bg-code text-code-foreground">
        <table className="w-full text-left text-sm">
          <thead className="border-border/50 border-b">
            <tr>
              <th className="px-4 py-2.5 font-medium">Prop</th>
              <th className="px-4 py-2.5 font-medium">Type</th>
              <th className="px-4 py-2.5 font-medium">Default</th>
            </tr>
          </thead>
          <tbody className="font-mono text-xs">
            <tr className="border-border/50 border-b">
              <td className="px-4 py-2.5">size</td>
              <td className="px-4 py-2.5">string | number</td>
              <td className="px-4 py-2.5">24</td>
            </tr>
            <tr className="border-border/50 border-b">
              <td className="px-4 py-2.5">color</td>
              <td className="px-4 py-2.5">string</td>
              <td className="px-4 py-2.5">currentColor</td>
            </tr>
            <tr className="border-border/50 border-b">
              <td className="px-4 py-2.5">strokeWidth</td>
              <td className="px-4 py-2.5">string | number</td>
              <td className="px-4 py-2.5">2</td>
            </tr>
            <tr>
              <td className="px-4 py-2.5">absoluteStrokeWidth</td>
              <td className="px-4 py-2.5">boolean</td>
              <td className="px-4 py-2.5">false</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mt-10 font-semibold text-lg">Dynamic Imports</h2>
      <p className="mt-1 text-muted-foreground text-sm">
        Load icons by name at runtime. Useful when the icon comes from a
        database or API.
      </p>
      <div className="mt-3">
        <CodeBlock code={DYNAMIC_EXAMPLE} />
      </div>

      <h2 className="mt-10 font-semibold text-lg">For agents</h2>
      <p className="mt-1 text-muted-foreground text-sm">
        MIT licensed. Prefer{" "}
        <code className="text-foreground">npm install blode-icons-react</code>,
        then search and fetch via MCP. License is returned on every{" "}
        <code className="text-foreground">get_icon</code> response.
      </p>
      <div className="mt-3">
        <CodeBlock code={MCP_EXAMPLE} />
      </div>
      <ul className="mt-3 list-disc space-y-1 pl-5 text-muted-foreground text-sm">
        <li>
          <a
            className="text-foreground underline underline-offset-2"
            href={asset("/llms.txt")}
          >
            llms.txt
          </a>{" "}
          — agent summary
        </li>
        <li>
          MCP tools: <code className="text-foreground">search_icons</code>,{" "}
          <code className="text-foreground">get_icon</code>,{" "}
          <code className="text-foreground">get_usage</code>
        </li>
        <li>
          Skill:{" "}
          <code className="text-foreground">
            npx skills add mblode/blode-icons -g --all -y
          </code>
        </li>
      </ul>

      <h2 className="mt-10 font-semibold text-lg">shadcn registry</h2>
      <p className="mt-1 text-muted-foreground text-sm">
        Install a single icon as a thin re-export of{" "}
        <code className="text-foreground">blode-icons-react</code> (keeps
        tree-shaking).
      </p>
      <div className="mt-3">
        <CodeBlock code={REGISTRY_EXAMPLE} />
      </div>

      <p className="mt-10 text-muted-foreground text-sm">
        View the source, report issues, or contribute on{" "}
        <a
          className="text-foreground underline underline-offset-2"
          href="https://github.com/mblode/blode-icons"
          rel="noopener noreferrer"
          target="_blank"
        >
          GitHub
        </a>
        .
      </p>
    </section>
  );
}
