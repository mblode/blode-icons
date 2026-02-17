import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const BubblePlusIcon = (
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
      d="M11.9998 8v3m0 0v3m0-3h-3m3 0h3m-3.0021 9.5358 2.74-2.2701a1 1 0 0 1 .638-.2299h1.6263c1.6568 0 3-1.3432 3-3V7c0-1.6569-1.3432-3-3.0001-3h-10c-1.6568 0-3 1.3432-3 3v8.0358c0 1.6568 1.3432 3 3 3h1.6497c.2349 0 .4623.0827.6424.2336z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(BubblePlusIcon);
export default ForwardRef;
