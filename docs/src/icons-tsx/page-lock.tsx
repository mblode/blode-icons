import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const PageLockIcon = (
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
      d="M10 21H8c-1.6569 0-3-1.3431-3-3V6c0-1.6569 1.3431-3 3-3h8c1.6569 0 3 1.3431 3 3v4m0 7h-4m4 0c.5523 0 1 .4477 1 1v2c0 .5523-.4477 1-1 1h-4c-.5523 0-1-.4477-1-1v-2c0-.5523.4477-1 1-1m4 0v-1c0-1.1046-.8954-2-2-2s-2 .8954-2 2v1"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(PageLockIcon);
export default ForwardRef;
