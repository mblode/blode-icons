import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const PageCrossTextIcon = (
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
      d="M13 21H8c-1.6569 0-3-1.3431-3-3V6c0-1.6569 1.3431-3 3-3h8c1.6569 0 3 1.3431 3 3v7M21.1213 16.8789 19 19.0002m0 0-2.1213 2.1214M19 19.0002l-2.1213-2.1213M19 19.0002l2.1213 2.1214M9 7h6m-6 4h2"
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
const ForwardRef = forwardRef(PageCrossTextIcon);
export default ForwardRef;
