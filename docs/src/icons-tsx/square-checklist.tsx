import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const SquareChecklistIcon = (
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
      d="m7.543 9.4978 1.125.75 1.8716-2.4956M14.0579 9h2M14 15h2m-8.457.4989 1.125.75 1.8716-2.4955M7 20h10c1.6569 0 3-1.3431 3-3V7c0-1.6569-1.3431-3-3-3H7C5.3431 4 4 5.3431 4 7v10c0 1.6569 1.3431 3 3 3"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(SquareChecklistIcon);
export default ForwardRef;
