import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const CurrencyRupeesIcon = (
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
      d="M5 3h14M5 8h14M16 21 5 13h6c2.7614 0 5-2.2386 5-5s-2.2386-5-5-5H7"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(CurrencyRupeesIcon);
export default ForwardRef;
