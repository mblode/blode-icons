import { ImageResponse } from "next/og";

async function loadAssets(): Promise<
  { name: string; data: Buffer; weight: 400 | 600; style: "normal" }[]
> {
  const [
    { base64Font: normal },
    { base64Font: mono },
    { base64Font: semibold },
  ] = await Promise.all([
    import("./geist-regular-otf.json").then((mod) => mod.default || mod),
    import("./geistmono-regular-otf.json").then((mod) => mod.default || mod),
    import("./geist-semibold-otf.json").then((mod) => mod.default || mod),
  ]);

  return [
    {
      name: "Geist",
      data: Buffer.from(normal, "base64"),
      weight: 400 as const,
      style: "normal" as const,
    },
    {
      name: "Geist Mono",
      data: Buffer.from(mono, "base64"),
      weight: 400 as const,
      style: "normal" as const,
    },
    {
      name: "Geist",
      data: Buffer.from(semibold, "base64"),
      weight: 600 as const,
      style: "normal" as const,
    },
  ];
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  const [fonts] = await Promise.all([loadAssets()]);

  return new ImageResponse(
    <div
      style={{ fontFamily: "Geist Sans" }}
      tw="flex h-full w-full bg-black text-white"
    >
      <div tw="flex border absolute border-neutral-800 border-dashed inset-y-0 left-16 w-[1px]" />
      <div tw="flex border absolute border-neutral-800 border-dashed inset-y-0 right-16 w-[1px]" />
      <div tw="flex border absolute border-neutral-800 inset-x-0 h-[1px] top-16" />
      <div tw="flex border absolute border-neutral-800 inset-x-0 h-[1px] bottom-16" />
      <div tw="flex absolute flex-row items-center bottom-24 right-24 text-white">
        <div
          style={{ fontWeight: 600, letterSpacing: "-0.02em" }}
          tw="ml-3 text-[28px]"
        >
          blode/icons
        </div>
      </div>
      <div tw="flex flex-col absolute w-[896px] justify-center inset-32">
        <div
          style={{
            textWrap: "balance",
            fontWeight: 600,
            fontSize: title && title.length > 20 ? 64 : 80,
            letterSpacing: "-0.04em",
          }}
          tw="tracking-tight flex-grow-1 flex flex-col justify-center leading-[1.1]"
        >
          {title}
        </div>
        <div
          style={{
            fontWeight: 500,
            textWrap: "balance",
          }}
          tw="text-[40px] leading-[1.5] flex-grow-1 text-neutral-400"
        >
          {description}
        </div>
      </div>
    </div>,
    {
      width: 1200,
      height: 628,
      fonts,
    }
  );
}
