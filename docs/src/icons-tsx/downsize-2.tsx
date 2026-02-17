import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Downsize2Icon = (
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
      d="M4 10h3c1.6569 0 3-1.3431 3-3V4M20 10h-3c-1.6569 0-3-1.3431-3-3V4M14 20v-3c0-1.6569 1.3431-3 3-3h3M4 14h3c1.6569 0 3 1.3431 3 3v3"
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
const ForwardRef = forwardRef(Downsize2Icon);
export default ForwardRef;
