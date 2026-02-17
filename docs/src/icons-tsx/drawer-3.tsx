import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Drawer3Icon = (
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
      d="M3 8c0-1.6569 1.3431-3 3-3h12c1.6569 0 3 1.3431 3 3v7c0 1.6569-1.3431 3-3 3H6c-1.6569 0-3-1.3431-3-3zM12 5v13M5 18v2M19 18v2M15 10v2M9 10v2"
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
const ForwardRef = forwardRef(Drawer3Icon);
export default ForwardRef;
