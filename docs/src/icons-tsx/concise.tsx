import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ConciseIcon = (
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
      d="M4 10h16m0 4H4M9.5 20l2.5-2.5 2.5 2.5M14.5 4 12 6.5 9.5 4"
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
const ForwardRef = forwardRef(ConciseIcon);
export default ForwardRef;
