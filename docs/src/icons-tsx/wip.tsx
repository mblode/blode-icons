import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const WipIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M3 8c0-1.6569 1.3431-3 3-3h12c1.6569 0 3 1.3431 3 3v2c0 1.6569-1.3431 3-3 3H6c-1.6569 0-3-1.3431-3-3zM7 13v8m0 0H6m1 0h1M17 13v8m0 0h-1m1 0h1M7 4V3M17 4V3M5.5 12.5l3-7M15.5 12.5l3-7M10.5 12.5l3-7"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      style={{
        stroke: "currentColor",
        strokeOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(WipIcon);
export default ForwardRef;
