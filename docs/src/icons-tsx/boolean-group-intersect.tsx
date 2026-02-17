import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const BooleanGroupIntersectIcon = (
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
      d="M9 9v6h6m3.5 0c1.3807 0 2.5-1.1193 2.5-2.5V6c0-1.6569-1.3431-3-3-3h-6.5C10.1193 3 9 4.1193 9 5.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      style={{
        stroke: "currentColor",
        strokeOpacity: 1,
      }}
    />
    <path
      d="M15 15V9H9m6 9.5c0 1.3807-1.1193 2.5-2.5 2.5H6c-1.6569 0-3-1.3431-3-3v-6.5C3 10.1193 4.1193 9 5.5 9"
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
const ForwardRef = forwardRef(BooleanGroupIntersectIcon);
export default ForwardRef;
