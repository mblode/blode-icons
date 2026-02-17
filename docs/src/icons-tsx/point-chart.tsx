import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const PointChartIcon = (
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
      d="M4 4v13c0 1.6569 1.3431 3 3 3h13"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      style={{
        stroke: "currentColor",
        strokeOpacity: 1,
      }}
    />
    <path
      d="M9.5 14.5h.01m.49 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M11.5 8.5h.01m.49 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M16.5 11.5h.01m.49 0a.5.5 0 1 1-1.0001-.0001A.5.5 0 0 1 17 11.5M18.5 5.5h.01m.49 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"
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
const ForwardRef = forwardRef(PointChartIcon);
export default ForwardRef;
