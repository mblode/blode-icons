import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const BooleanGroupExcludeIcon = (
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
      height={12}
      rx={3}
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={2}
      style={{
        stroke: "currentColor",
        strokeOpacity: 1,
      }}
      width={12}
      x={9}
      y={3}
    />
    <rect
      height={12}
      rx={3}
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={2}
      style={{
        stroke: "currentColor",
        strokeOpacity: 1,
      }}
      width={12}
      x={3}
      y={9}
    />
  </svg>
);
const ForwardRef = forwardRef(BooleanGroupExcludeIcon);
export default ForwardRef;
