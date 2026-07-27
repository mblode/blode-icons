import { asset, basePath } from "@/lib/config";

export function SiteHeader() {
  return (
    <header className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-4 pt-4">
      {/*
        Raw anchors, so Next does not prefix `basePath` the way it would for
        `next/link`. Without `basePath`/`asset()` these escape the /icons zone
        and hit blode.co itself — `/installation` there is a 404.
      */}
      <a
        className="font-semibold text-lg underline-offset-2 hover:underline"
        href={basePath}
      >
        Blode Icons
      </a>
      <nav className="flex items-center gap-4">
        <a
          className="text-muted-foreground text-sm underline-offset-2 hover:text-foreground hover:underline"
          href={asset("/installation")}
        >
          Installation
        </a>
        <a
          className="text-muted-foreground text-sm underline-offset-2 hover:text-foreground hover:underline"
          href="https://github.com/mblode/blode-icons"
          rel="noopener noreferrer"
          target="_blank"
        >
          GitHub
        </a>
      </nav>
    </header>
  );
}
