import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const MathMultiplicationIcon = (
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
      d="M5 12h14M11.9 6.5h.2m.4 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM11.9 17.5h.2m.4 0a.5.5 0 1 1-1.0001-.0001A.5.5 0 0 1 12.5 17.5Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
      style={{
        stroke: "currentColor",
        strokeOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(MathMultiplicationIcon);
export default ForwardRef;
