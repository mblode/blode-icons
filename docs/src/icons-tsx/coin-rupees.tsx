import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const CoinRupeesIcon = (
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
      d="M8 11h8"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
    />
    <path
      d="M21 12c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M9.5 8H11c1.6569 0 3 1.3431 3 3v0c0 1.6569-1.3431 3-3 3H9.5l4 3"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
    />
  </svg>
);
const ForwardRef = forwardRef(CoinRupeesIcon);
export default ForwardRef;
