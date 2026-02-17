import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const DeskOffice2Icon = (
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
      d="M4 20v-5c0-1.6569 1.3431-3 3-3h6m0 0h4c1.6569 0 3 1.3431 3 3v4c0 .5523-.4477 1-1 1h-5c-.5523 0-1-.4477-1-1z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      style={{
        stroke: "currentColor",
        strokeOpacity: 1,
      }}
    />
    <rect
      height={5}
      rx={1}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      style={{
        stroke: "currentColor",
        strokeOpacity: 1,
      }}
      width={8}
      x={6}
      y={4}
    />
    <path
      d="M10 9v3M20 16h-7"
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
const ForwardRef = forwardRef(DeskOffice2Icon);
export default ForwardRef;
