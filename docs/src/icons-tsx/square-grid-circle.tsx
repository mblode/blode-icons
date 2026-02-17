import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const SquareGridCircleIcon = (
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
      d="M4 6c0-1.1046.8954-2 2-2h2c1.1046 0 2 .8954 2 2v2c0 1.1046-.8954 2-2 2H6c-1.1046 0-2-.8954-2-2zM4 16c0-1.1046.8954-2 2-2h2c1.1046 0 2 .8954 2 2v2c0 1.1046-.8954 2-2 2H6c-1.1046 0-2-.8954-2-2zM14 6c0-1.1046.8954-2 2-2h2c1.1046 0 2 .8954 2 2v2c0 1.1046-.8954 2-2 2h-2c-1.1046 0-2-.8954-2-2zM14 17c0-1.6569 1.3431-3 3-3s3 1.3431 3 3-1.3431 3-3 3-3-1.3431-3-3"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.995}
    />
  </svg>
);
const ForwardRef = forwardRef(SquareGridCircleIcon);
export default ForwardRef;
