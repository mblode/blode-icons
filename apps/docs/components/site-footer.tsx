export function SiteFooter() {
  return (
    <footer className="relative border-border border-t py-6">
      <div className="container flex flex-col items-center justify-between gap-4 text-center">
        <p className="text-center text-muted-foreground text-sm leading-loose">
          Created by{" "}
          <a
            className="font-medium underline underline-offset-4"
            href="https://matthewblode.com"
            rel="noreferrer"
            target="_blank"
            title="Blode UI"
          >
            Matthew Blode
          </a>
        </p>
      </div>
    </footer>
  );
}
