import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const CreditCardAddIcon = (
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
      d="M19 14v3m0 0v3m0-3h-3m3 0h3M3 10v6c0 1.6569 1.343 3 3 3h6m-9-9V8c0-1.6569 1.3431-3 3-3h12c1.6569 0 3 1.3433 3 3.0002V10z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(CreditCardAddIcon);
export default ForwardRef;
