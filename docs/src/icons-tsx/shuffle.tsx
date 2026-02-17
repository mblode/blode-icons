import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ShuffleIcon = (
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
      d="M3 18h.7574a3 3 0 0 0 2.1213-.8787l9.2426-9.2426A3 3 0 0 1 17.2426 7H19M3 6h.7574a3 3 0 0 1 2.1213.8787L8 9m11 8h-1.7574a3 3 0 0 1-2.1213-.8787L14 15m4-11 3 3-3 3m0 4 3 3-3 3"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(ShuffleIcon);
export default ForwardRef;
