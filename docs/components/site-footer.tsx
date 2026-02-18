export function SiteFooter() {
  return (
    <footer className="relative border-border border-t py-6 md:py-0">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center justify-center text-center gap-4 px-4 md:h-16 md:flex-row">
        <p className="text-center text-muted-foreground text-sm leading-loose md:text-left">
          Brought to you by{" "}
          <a
            className="font-medium underline underline-offset-4"
            href="https://matthewblode.com"
            rel="noreferrer"
            target="_blank"
            title="Blode UI"
          >
            Matthew Blode
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
