import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Scissors1Icon = (
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
      d="m7 14 4.8333-2m0 0L12 11.931m-.1667.069.1667.069M11.8333 12 7 10m5 1.931L21.5 8l-1.5436-1.2863a3 3 0 0 0-3.1777-.4192l-3.0359 1.4011A3 3 0 0 0 12 10.4195zm0 0v.138m0 0v1.5115a3 3 0 0 0 1.7428 2.7239l3.0359 1.4011a3 3 0 0 0 3.1777-.4192L21.5 16zM9 7c0 1.6569-1.3431 3-3 3S3 8.6569 3 7s1.3431-3 3-3 3 1.3431 3 3Zm0 10c0 1.6569-1.3431 3-3 3s-3-1.3431-3-3 1.3431-3 3-3 3 1.3431 3 3Z"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(Scissors1Icon);
export default ForwardRef;
