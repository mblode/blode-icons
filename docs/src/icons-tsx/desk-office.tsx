import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const DeskOfficeIcon = (
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
      d="M15 10v1M3 18V9c0-1.6569 1.3431-3 3-3h5m0 0h7c1.6569 0 3 1.3431 3 3v8c0 .5523-.4477 1-1 1h-8c-.5523 0-1-.4477-1-1z"
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
const ForwardRef = forwardRef(DeskOfficeIcon);
export default ForwardRef;
