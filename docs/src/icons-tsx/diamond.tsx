import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const DiamondIcon = (
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
      d="M9.498 8 7.8517 9.6464a.5.5 0 0 0 0 .7072L9.4981 12m4.6213 7.3787 7.0879-7.0879c1.2357-1.2357 1.1579-3.2619-.1689-4.3991l-3.6977-3.1695A3 3 0 0 0 15.3883 4H8.6079a3 3 0 0 0-1.9524.7222L2.9578 7.8917c-1.3268 1.1372-1.4046 3.1634-.169 4.3991l7.088 7.0879c1.1715 1.1716 3.071 1.1716 4.2426 0"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(DiamondIcon);
export default ForwardRef;
