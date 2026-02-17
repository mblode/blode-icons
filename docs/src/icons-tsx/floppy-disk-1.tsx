import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const FloppyDisk1Icon = (
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
      d="M8 4v3c0 .5523.4477 1 1 1h6c.5523 0 1-.4477 1-1V4m4 4.2426V17c0 1.6569-1.3431 3-3 3H7c-1.6569 0-3-1.3431-3-3V7c0-1.6569 1.3431-3 3-3h8.7574a3 3 0 0 1 2.1213.8787l1.2426 1.2426A3 3 0 0 1 20 8.2426M8 14v5c0 .5523.4477 1 1 1h6c.5523 0 1-.4477 1-1v-5c0-.5523-.4477-1-1-1H9c-.5523 0-1 .4477-1 1"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(FloppyDisk1Icon);
export default ForwardRef;
