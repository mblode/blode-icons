import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const BooleanGroupUnionIcon = (
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
      d="M18 3h-6c-1.6569 0-3 1.3431-3 3v3H6c-1.6569 0-3 1.3431-3 3v6c0 1.6569 1.3431 3 3 3h6c1.6569 0 3-1.3431 3-3v-3h3c1.6569 0 3-1.3431 3-3V6c0-1.6569-1.3431-3-3-3Z"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={2}
      style={{
        stroke: "currentColor",
        strokeOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(BooleanGroupUnionIcon);
export default ForwardRef;
