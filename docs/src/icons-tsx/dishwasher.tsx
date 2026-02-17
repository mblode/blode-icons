import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const DishwasherIcon = (
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
    <rect
      height={16}
      rx={3}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      style={{
        stroke: "currentColor",
        strokeOpacity: 1,
      }}
      width={16}
      x={4}
      y={4}
    />
    <path
      d="M7.25 7.25h.01m.24 0a.25.25 0 1 1-.5 0 .25.25 0 0 1 .5 0M14.75 13.8c0 1.3807-1.2312 2.7-2.75 2.7s-2.75-1.3193-2.75-2.7C9.25 11.6846 12 9 12 9s2.75 2.6846 2.75 4.8"
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
const ForwardRef = forwardRef(DishwasherIcon);
export default ForwardRef;
