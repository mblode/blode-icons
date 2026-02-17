import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ShredderIcon = (
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
      d="M3 13h18M5 9V6c0-1.6569 1.3431-3 3-3h8c1.6569 0 3 1.3431 3 3v3M6 17v2m4-2v4m4-4v2m4-2v4"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(ShredderIcon);
export default ForwardRef;
