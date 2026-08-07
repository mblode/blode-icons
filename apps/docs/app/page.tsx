import { App } from "@/components/app";
import { JsonLd } from "@/components/json-ld";
import { zoneRootJsonLd } from "@/lib/zone-schema";

export default function Home() {
  return (
    <>
      <JsonLd data={zoneRootJsonLd} />
      <App />
    </>
  );
}
