import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Direction1Icon = (
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
      d="M12 16v4m0-4H6a2 2 0 0 1-1.6-.8l-1.5-2a2 2 0 0 1 0-2.4l1.5-2A2 2 0 0 1 6 8h5c.5523 0 1 .4477 1 1zm1-12h5a2 2 0 0 1 1.6.8l1.5 2a2 2 0 0 1 0 2.4l-1.5 2a2 2 0 0 1-1.6.8h-5c-.5523 0-1-.4477-1-1V5c0-.5523.4477-1 1-1"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(Direction1Icon);
export default ForwardRef;
