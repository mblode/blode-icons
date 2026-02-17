import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const WindowCursorIcon = (
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
      d="M5.875 8.75a.875.875 0 1 0 1.75 0 .875.875 0 0 0-1.75 0Zm3.5 0a.875.875 0 1 0 1.75 0 .875.875 0 0 0-1.75 0Zm3.5 0a.875.875 0 1 0 1.75 0 .875.875 0 0 0-1.75 0Z"
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="square"
      strokeWidth={0.75}
      style={{
        fill: "currentColor",
        fillOpacity: 1,
        stroke: "currentColor",
        strokeOpacity: 1,
      }}
    />
    <path
      d="M21 12.25V8c0-1.6569-1.3431-3-3-3H6C4.3431 5 3 6.3431 3 8v9c0 1.6569 1.3431 3 3 3h6m10-2.5-6.5-2 2 6.5 1.5-3z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(WindowCursorIcon);
export default ForwardRef;
