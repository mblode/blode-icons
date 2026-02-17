import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const StocksIcon = (
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
      d="M14 12c1.1046 0 2-.8954 2-2s-.8954-2-2-2m0 4a1.994 1.994 0 0 1-1.4142-.5858M14 12v8m0-12c-1.1046 0-2 .8954-2 2 0 .5523.2239 1.0523.5858 1.4142M14 8V4m0 0H7C5.3431 4 4 5.3431 4 7v10c0 1.6569 1.3431 3 3 3h7m0-16h3c1.6569 0 3 1.3431 3 3v10c0 1.6569-1.3431 3-3 3h-3m-1.4142-8.5858L9 15l-2-2-2.5 2.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(StocksIcon);
export default ForwardRef;
