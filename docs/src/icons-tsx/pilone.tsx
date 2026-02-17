import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const PiloneIcon = (
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
      d="M15.5 10h-7m-1 4h9m2.3529 5.5L14.5643 4.9187a2.673 2.673 0 0 0-5.1286 0L5.147 19.5M3 20h18"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(PiloneIcon);
export default ForwardRef;
