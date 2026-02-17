import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const CalenderRemoveIcon = (
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
      d="M11 20H7c-1.6569 0-3-1.3431-3-3V9m0 0V8c0-1.6569 1.3431-3 3-3h10c1.6569 0 3 1.3431 3 3v1M4 9h16m0 0v2M8 5V3m8 2V3m0 13 2.0002 2m0 0L20 20m-1.9998-2L16 20m2.0002-2L20 16"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(CalenderRemoveIcon);
export default ForwardRef;
