import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Drawer4Icon = (
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
      d="M3 8c0-1.6569 1.3431-3 3-3h12c1.6569 0 3 1.3431 3 3v5c0 1.6569-1.3431 3-3 3H6c-1.6569 0-3-1.3431-3-3zM12 5v11M15 9v2M19 16.25V19M9 9v2M5 16.25V19"
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
const ForwardRef = forwardRef(Drawer4Icon);
export default ForwardRef;
