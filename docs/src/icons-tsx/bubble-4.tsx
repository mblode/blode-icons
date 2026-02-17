import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Bubble4Icon = (
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
      d="M20.002 7c0-1.6569-1.3432-3-3-3h-10c-1.6569 0-3 1.3431-3 3v14.5l3.7568-2.348c.1589-.0993.3425-.152.53-.152h8.7132c1.6568 0 3-1.3431 3-3z"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(Bubble4Icon);
export default ForwardRef;
