import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const CompassSquareIcon = (
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
      d="m14.6558 8.7302-4.1045 1.1195a1 1 0 0 0-.7016.7016l-1.1195 4.1045c-.1018.3733.2407.7158.614.614l4.1045-1.1194a1 1 0 0 0 .7017-.7017l1.1194-4.1045c.1018-.3733-.2407-.7158-.614-.614Z"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
      d="M4 7c0-1.6569 1.3431-3 3-3h10c1.6569 0 3 1.3431 3 3v10c0 1.6569-1.3431 3-3 3H7c-1.6569 0-3-1.3431-3-3z"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(CompassSquareIcon);
export default ForwardRef;
