import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const PageSearchLinesIcon = (
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
      d="M19 11V6c0-1.6569-1.3431-3-3-3H7C5.3431 3 4 4.3431 4 6v12c0 1.6569 1.3431 3 3 3h3.5M8 15h1M8 7h7m-7 4h3m8.1213 9.1213c-1.1716 1.1716-3.071 1.1716-4.2426 0s-1.1716-3.0711 0-4.2427c1.1716-1.1715 3.071-1.1715 4.2426 0s1.1716 3.0711 0 4.2427m0 0L21 22"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(PageSearchLinesIcon);
export default ForwardRef;
