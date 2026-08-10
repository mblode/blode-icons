import { App } from "@/components/app";
import { JsonLd } from "@/components/json-ld";
import { ZoneBreadcrumb } from "@/components/zone-breadcrumb";
import { zoneRootJsonLd } from "@/lib/zone-schema";

export default function Home() {
  return (
    <>
      <JsonLd data={zoneRootJsonLd} />
      {/*
        Rule 4: the trail back to the hub, visible and not only in JSON-LD.
        Root page only, and the same three crumbs the BreadcrumbList declares.
        The container matches the header and the search bar below it.
      */}
      <div className="mx-auto w-full max-w-[1400px] px-4 pt-4">
        <ZoneBreadcrumb product="Blode Icons" />
      </div>
      <App />
    </>
  );
}
