import { ImageResponse } from "next/og"

export const alt = "Blode Icons"
export const size = { width: 1200, height: 628 }
export const contentType = "image/png"
export const runtime = "edge"

async function loadAssets(): Promise<
  { name: string; data: Buffer; weight: 400 | 600; style: "normal" }[]
> {
  const [{ base64Font: normal }, { base64Font: semibold }] = await Promise.all([
    import("./og/geist-regular-otf.json").then((mod) => mod.default || mod),
    import("./og/geist-semibold-otf.json").then((mod) => mod.default || mod),
  ])

  return [
    {
      name: "Geist",
      data: Buffer.from(normal, "base64"),
      weight: 400 as const,
      style: "normal" as const,
    },
    {
      name: "Geist",
      data: Buffer.from(semibold, "base64"),
      weight: 600 as const,
      style: "normal" as const,
    },
  ]
}

export default async function Image() {
  const fonts = await loadAssets()

  return new ImageResponse(
    (
      <div
        tw="flex h-full w-full bg-black text-white"
        style={{ fontFamily: "Geist Sans" }}
      >
        <div tw="flex border absolute border-neutral-800 border-dashed inset-y-0 left-16 w-[1px]" />
        <div tw="flex border absolute border-neutral-800 border-dashed inset-y-0 right-16 w-[1px]" />
        <div tw="flex border absolute border-neutral-800 inset-x-0 h-[1px] top-16" />
        <div tw="flex border absolute border-neutral-800 inset-x-0 h-[1px] bottom-16" />
        <div tw="flex absolute flex-row items-center bottom-24 right-24 text-white">
          <div
            tw="ml-3 text-[28px]"
            style={{ fontWeight: 600, letterSpacing: "-0.02em" }}
          >
            blode/icons
          </div>
        </div>
        <div tw="flex flex-col absolute w-[896px] justify-center inset-32">
          <div
            tw="tracking-tight flex-grow-1 flex flex-col justify-center leading-[1.1]"
            style={{
              textWrap: "balance",
              fontWeight: 600,
              fontSize: 80,
              letterSpacing: "-0.04em",
            }}
          >
            Blode Icons
          </div>
          <div
            tw="text-[40px] leading-[1.5] flex-grow-1 text-neutral-400"
            style={{
              fontWeight: 500,
              textWrap: "balance",
            }}
          >
            A beautifully crafted icon library. Open source.
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts,
    },
  )
}
