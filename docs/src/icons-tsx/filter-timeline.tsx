import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const FilterTimelineIcon = (
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
      d="M6.0016 5v14m0 0L3 16m3.0016 3L9 16m3-9h8m-4 10h4m-6-5h6"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(FilterTimelineIcon);
export default ForwardRef;
