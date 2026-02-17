import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const MacinthoshIcon = (
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
      d="M6 17.5V20c0 .5523.4477 1 1 1h10c.5523 0 1-.4477 1-1v-2.5M14 15h2M8 6h8v6H8zm-3 9V6c0-1.6569 1.3431-3 3-3h8c1.6569 0 3 1.3431 3 3v9c0 1.6569-1.3431 3-3 3H8c-1.6569 0-3-1.3431-3-3"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(MacinthoshIcon);
export default ForwardRef;
