import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const TradingViewCandlesIcon = (
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
      d="M7 3v7m0 0c1.6569 0 3 1.3431 3 3v2c0 1.6569-1.3431 3-3 3m0-8c-1.6569 0-3 1.3431-3 3v2c0 1.6569 1.3431 3 3 3m0 0v3M17 3v3m0 0c-1.6569 0-3 1.3431-3 3v6c0 1.6569 1.3431 3 3 3m0-12c1.6569 0 3 1.3431 3 3v6c0 1.6569-1.3431 3-3 3m0 0v3"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(TradingViewCandlesIcon);
export default ForwardRef;
