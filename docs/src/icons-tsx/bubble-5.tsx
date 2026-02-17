import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Bubble5Icon = (
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
      d="M21.5 12c0-5-3.6944-8-9.5-8s-9.5 3-9.5 8c0 1.2943.8942 3.4896 1.0366 3.8309.013.0311.0259.0596.0375.0913.0975.2658.489 1.66-1.0741 3.7217 2.1111 1 4.3531-.6439 4.3531-.6439 1.5511.8154 3.3968 1 5.1469 1 5.8056 0 9.5-3 9.5-8Z"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(Bubble5Icon);
export default ForwardRef;
