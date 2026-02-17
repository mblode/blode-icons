import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const DoorIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M3 21h18M5 21V6c0-1.6569 1.3431-3 3-3h8c1.6569 0 3 1.3431 3 3v15M8 12h1"
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
const ForwardRef = forwardRef(DoorIcon);
export default ForwardRef;
