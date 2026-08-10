import { ImageResponse } from "next/og";

import { loadGlideFonts } from "./og/glide-fonts";

export const alt = "Blode Icons";
export const size = { height: 628, width: 1200 };
export const contentType = "image/png";

export default async function Image() {
  const fonts = await loadGlideFonts();

  return new ImageResponse(
    <div
      style={{ fontFamily: "Glide" }}
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
            fontSize: 80,
            fontWeight: 600,
            letterSpacing: "-0.04em",
            textWrap: "balance",
          }}
          tw="tracking-tight flex-grow-1 flex flex-col justify-center leading-[1.1]"
        >
          Blode Icons
        </div>
        <div
          style={{
            fontWeight: 400,
            textWrap: "balance",
          }}
          tw="text-[40px] leading-[1.5] flex-grow-1 text-neutral-400"
        >
          A beautifully crafted icon library. Open source.
        </div>
      </div>
    </div>,
    {
      ...size,
      fonts,
    }
  );
}
