import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Trending4Icon = (
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
      d="M3 5v11c0 1.6569 1.3431 3 3 3h15M7 15l3-3c.5523-.5523 1.4477-.5523 2 0s1.4477.5523 2 0l4.5-4.5M15 7h4v4"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(Trending4Icon);
export default ForwardRef;
