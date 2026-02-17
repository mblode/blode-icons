import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const MathBasicIcon = (
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
      d="M7 4v6M4 7h6M4.5 14.5 7 17m0 0 2.5 2.5M7 17l-2.5 2.5M7 17l2.5-2.5M14 7h6M14 17h6"
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
      d="M17 14h.0001M17 20h.0001"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2.2}
      style={{
        stroke: "currentColor",
        strokeOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(MathBasicIcon);
export default ForwardRef;
