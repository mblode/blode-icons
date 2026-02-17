import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const DirectorChairIcon = (
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
      d="m5 12 7 4.5M5 12H3m2 0h14M5 12V6c0-1.6569 1.3431-3 3-3h8c1.6569 0 3 1.3431 3 3v6m-7 4.5 7 4.5m-7-4.5 7-4.5m-7 4.5L5 21m14-9h2"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(DirectorChairIcon);
export default ForwardRef;
