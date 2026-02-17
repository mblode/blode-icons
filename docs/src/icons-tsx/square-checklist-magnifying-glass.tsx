import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const SquareChecklistMagnifyingGlassIcon = (
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
      d="m7.543 9.4978 1.125.75 1.8716-2.4955M14.0579 9h2m-8.515 6.4989 1.125.75 1.8717-2.4955M10 20H7c-1.6569 0-3-1.3431-3-3V7c0-1.6569 1.3431-3 3-3h10c1.6569 0 3 1.3431 3 3v3m-.8787 9.1213c-1.1716 1.1716-3.071 1.1716-4.2426 0s-1.1716-3.0711 0-4.2427c1.1716-1.1715 3.071-1.1715 4.2426 0s1.1716 3.0711 0 4.2427m0 0L21 21"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(SquareChecklistMagnifyingGlassIcon);
export default ForwardRef;
