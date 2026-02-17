import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const PrinterIcon = (
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
      d="M7 14v5c0 1.1046.8954 2 2 2h6c1.1046 0 2-.8954 2-2v-5M7 14h10M7 14v2c0 .5523-.4477 1-1 1H5c-1.1046 0-2-.8954-2-2v-5c0-1.6569 1.3431-3 3-3h12c1.6569 0 3 1.3431 3 3v5c0 1.1046-.8954 2-2 2h-1c-.5523 0-1-.4477-1-1v-2m-8-3H7m2-8h6c1.1046 0 2 .8954 2 2v1c0 .5523-.4477 1-1 1H8c-.5523 0-1-.4477-1-1V5c0-1.1046.8954-2 2-2"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(PrinterIcon);
export default ForwardRef;
