import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const BubbleHeartIcon = (
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
      d="M4.002 7c0-1.6568 1.3431-3 3-3h9.9999c1.6569 0 3.0001 1.3431 3.0001 3v8.0358c0 1.6568-1.3432 3-3 3h-1.6263a1 1 0 0 0-.638.2299l-2.74 2.2701-2.7037-2.2664a1 1 0 0 0-.6424-.2336H7.0019c-1.6568 0-3-1.3432-3-3z"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
      d="M15.2511 10.6675c0 2.0773-2.9804 3.6126-3.2513 3.6126s-3.2514-1.5353-3.2514-3.6126c0-1.445.9032-2.1675 1.8063-2.1675s1.4451.5419 1.4451.5419.5418-.542 1.445-.542c.9031 0 1.8063.7226 1.8063 2.1676Z"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(BubbleHeartIcon);
export default ForwardRef;
