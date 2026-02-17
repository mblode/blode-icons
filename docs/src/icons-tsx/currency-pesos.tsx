import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const CurrencyPesosIcon = (
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
      d="M20 11H4M20 7H4M7 21V3h5c3.3137 0 6 2.6863 6 6s-2.6863 6-6 6H7.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(CurrencyPesosIcon);
export default ForwardRef;
