import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const SortArrowUpDownIcon = (
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
      d="M4 7c0-1.6569 1.3431-3 3-3s3 1.3431 3 3-1.3431 3-3 3-3-1.3431-3-3M4 17c0-1.6569 1.3431-3 3-3s3 1.3431 3 3-1.3431 3-3 3-3-1.3431-3-3M15 7.25l3-3 3 3M18 4.5v15M21 16.75l-3 3-3-3"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      style={{
        stroke: "currentColor",
        strokeOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SortArrowUpDownIcon);
export default ForwardRef;
