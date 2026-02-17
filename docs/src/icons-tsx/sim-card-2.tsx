import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const SimCard2Icon = (
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
      d="M11 3v4m4-4v4M5 8.2426V18c0 1.6569 1.3431 3 3 3h8c1.6569 0 3-1.3431 3-3V6c0-1.6569-1.3431-3-3-3h-5.7574a3 3 0 0 0-2.1213.8787L5.8787 6.1213A3 3 0 0 0 5 8.2426"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(SimCard2Icon);
export default ForwardRef;
