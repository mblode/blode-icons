import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ClockSquareIcon = (
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
      d="M12 10v1.9996L13.5 13.5m-3.4127-6.1182c2.5509-1.0566 5.4742.155 6.5309 2.7058 1.0566 2.5507-.155 5.4739-2.7059 6.5306-2.5508 1.0566-5.4741-.155-6.5308-2.7058-1.0558-2.5499.155-5.474 2.7058-6.5306M7 20h10c1.6569 0 3-1.3431 3-3V7c0-1.6569-1.3431-3-3-3H7C5.3431 4 4 5.3431 4 7v10c0 1.6569 1.3431 3 3 3"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(ClockSquareIcon);
export default ForwardRef;
