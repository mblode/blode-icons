import { ImageResponse } from "next/og";

import { loadGlideFonts } from "./glide-fonts";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title");
  const description = searchParams.get("description");

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
            fontSize: title && title.length > 20 ? 64 : 80,
            fontWeight: 600,
            letterSpacing: "-0.04em",
            textWrap: "balance",
          }}
          tw="tracking-tight flex-grow-1 flex flex-col justify-center leading-[1.1]"
        >
          {title}
        </div>
        <div
          style={{
            fontWeight: 400,
            textWrap: "balance",
          }}
          tw="text-[40px] leading-[1.5] flex-grow-1 text-neutral-400"
        >
          {description}
        </div>
      </div>
    </div>,
    {
      fonts,
      height: 628,
      width: 1200,
    }
  );
}
