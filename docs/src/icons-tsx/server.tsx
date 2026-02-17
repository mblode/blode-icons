import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ServerIcon = (
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
      d="M21 12V8c0-1.6569-1.3431-3-3-3H6C4.3431 5 3 6.3431 3 8v4m18 0H3m18 0v4c0 1.6569-1.3431 3-3 3H6c-1.6569 0-3-1.3431-3-3v-4"
      stroke="currentColor"
      strokeLinecap="square"
      strokeWidth={2}
    />
    <path
      d="M6.5 9.375a.875.875 0 1 0 0-1.75.875.875 0 0 0 0 1.75Zm0 7a.875.875 0 1 0 0-1.75.875.875 0 0 0 0 1.75Z"
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
const ForwardRef = forwardRef(ServerIcon);
export default ForwardRef;
