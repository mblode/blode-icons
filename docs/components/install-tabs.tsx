"use client";

import { CopyButton } from "@/components/copy-button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PACKAGE_MANAGERS = [
  { value: "npm", command: "npm install blode-icons-react" },
  { value: "pnpm", command: "pnpm add blode-icons-react" },
  { value: "yarn", command: "yarn add blode-icons-react" },
  { value: "bun", command: "bun add blode-icons-react" },
] as const;

export const InstallTabs = () => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-code text-code-foreground">
      <Tabs className="gap-0" defaultValue="npm">
        <div className="flex items-center gap-2 border-border/50 border-b px-3 py-1">
          <TabsList className="rounded-none bg-transparent p-0">
            {PACKAGE_MANAGERS.map((pm) => (
              <TabsTrigger
                className="h-7 border border-transparent shadow-none! data-[state=active]:border-input data-[state=active]:bg-background!"
                key={pm.value}
                value={pm.value}
              >
                {pm.value}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        {PACKAGE_MANAGERS.map((pm) => (
          <TabsContent
            className="mt-0 px-4 py-3.5"
            key={pm.value}
            value={pm.value}
          >
            <pre>
              <code className="font-mono text-sm leading-none">
                {pm.command}
              </code>
            </pre>
            <CopyButton value={pm.command} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};
