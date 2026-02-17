import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const BlockIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M5 20V7c0-1.6569 1.3431-3 3-3h8c1.6569 0 3 1.3431 3 3v13M5 20h14M5 20H3m16 0h2M9 8h1m4 0h1m-6 4h1m4 0h1m-6 4h1m4 0h1"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(BlockIcon);
export default ForwardRef;
