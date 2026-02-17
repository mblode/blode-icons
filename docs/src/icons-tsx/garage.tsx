import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const GarageIcon = (
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
      d="M7 19v-4m10 4v-4M7 15h10M7 15v-1c0-1.6569 1.3431-3 3-3h4c1.6569 0 3 1.3431 3 3v1M4.4356 8.1227l6.0001-3.6667a3 3 0 0 1 3.1286 0l6 3.6667A3 3 0 0 1 21 10.6825V16c0 1.6569-1.3431 3-3 3H6c-1.6569 0-3-1.3431-3-3v-5.3175a3 3 0 0 1 1.4356-2.5598Z"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(GarageIcon);
export default ForwardRef;
