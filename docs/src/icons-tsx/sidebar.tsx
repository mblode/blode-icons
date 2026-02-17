import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const SidebarIcon = (
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
      d="M11 5H6C4.3431 5 3 6.3431 3 8v8c0 1.6569 1.3431 3 3 3h5m0-14h7c1.6569 0 3 1.3431 3 3v8c0 1.6569-1.3431 3-3 3h-7m0-14v14"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
      d="M6.125 8.75a.875.875 0 1 0 1.75 0 .875.875 0 0 0-1.75 0Zm0 3.25a.875.875 0 1 0 1.75 0 .875.875 0 0 0-1.75 0Zm0 3.25a.875.875 0 1 0 1.75 0 .875.875 0 0 0-1.75 0Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={0.75}
      style={{
        fill: "currentColor",
        fillOpacity: 1,
        stroke: "currentColor",
        strokeOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SidebarIcon);
export default ForwardRef;
