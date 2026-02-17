import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const CurrencyYenIcon = (
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
      d="m6 4 6 7m0 0 6-7m-6 7v9M7 16h10M7 12h10"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(CurrencyYenIcon);
export default ForwardRef;
