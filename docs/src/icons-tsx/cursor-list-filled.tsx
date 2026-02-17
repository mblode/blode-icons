import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const CursorListFilledIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    fill="none"
    height={24}
    ref={ref}
    viewBox="0 0 24 24"
    width={24}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 4c0-.5523.4477-1 1-1h9c.5523 0 1 .4477 1 1s-.4477 1-1 1h-9c-.5523 0-1-.4477-1-1M15 8c0-.5523.4477-1 1-1h4c.5523 0 1 .4477 1 1s-.4477 1-1 1h-4c-.5523 0-1-.4477-1-1M3.255 10.3073c-.5604-1.5854.9669-3.1127 2.5523-2.5523l8.8136 3.1159c1.3869.4903 1.7878 2.2596.7476 3.2998l-2.1418 2.1418 3.9804 3.9804c.3905.3905.3905 1.0237 0 1.4142s-1.0237.3905-1.4142 0l-3.9804-3.9804-2.1418 2.1418c-1.0402 1.0402-2.8095.6393-3.2998-.7476z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(CursorListFilledIcon);
export default ForwardRef;
