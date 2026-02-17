import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const CurrencyPoundsIcon = (
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
      d="M6 20h12M6 20c4.7246 0 3-8.6661 3-11.5C9 6.0147 11.0147 4 13.5 4c1.5602 0 2.935.794 3.7422 2M6 12h8"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(CurrencyPoundsIcon);
export default ForwardRef;
