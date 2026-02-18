import { CodeBlock } from "@/components/code-block";
import { InstallTabs } from "@/components/install-tabs";

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

export function GettingStarted() {
  return (
    <section className="mx-auto w-full max-w-3xl px-4 py-8">
      <h2 className="font-semibold text-lg">Installation</h2>
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
        Drop-in replacement for lucide-react. Same names, same props.
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
            <tr>
              <td className="px-4 py-2.5">strokeWidth</td>
              <td className="px-4 py-2.5">string | number</td>
              <td className="px-4 py-2.5">2</td>
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

      <p className="mt-10 text-muted-foreground text-sm">
        View the source, report issues, or contribute on{" "}
        <a
          className="text-foreground underline underline-offset-2"
          href="https://github.com/mblode/blode-icons"
          rel="noopener"
          target="_blank"
        >
          GitHub
        </a>
        .
      </p>
    </section>
  );
}
