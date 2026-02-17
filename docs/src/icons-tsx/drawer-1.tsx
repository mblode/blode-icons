import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Drawer1Icon = (
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
      d="M5 6c0-1.6569 1.3431-3 3-3h8c1.6569 0 3 1.3431 3 3v10c0 1.6569-1.3431 3-3 3H8c-1.6569 0-3-1.3431-3-3zM18 11H5M7 19v2M17 19v2M10 7h4M10 15h4"
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
const ForwardRef = forwardRef(Drawer1Icon);
export default ForwardRef;
