import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const DresserIcon = (
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
      d="M4 7c0-1.6569 1.3431-3 3-3h10c1.6569 0 3 1.3431 3 3v8c0 1.6569-1.3431 3-3 3H7c-1.6569 0-3-1.3431-3-3zM20 11H4M7 19v2M17 19v2M11 7h2M11 14h2"
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
const ForwardRef = forwardRef(DresserIcon);
export default ForwardRef;
