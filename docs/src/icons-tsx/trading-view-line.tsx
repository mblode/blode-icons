import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const TradingViewLineIcon = (
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
      d="m2 15.8889 2.9357-3.2619c1.1306-1.2562 3.075-1.331 4.2989-.1655l2.397 2.2829c1.2736 1.213 3.3128 1.0751 4.4116-.2984L22 7"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(TradingViewLineIcon);
export default ForwardRef;
