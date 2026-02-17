import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const BooleanGroupIntersect2Icon = (
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
      d="M9 9v4c0 1.1046.8954 2 2 2h4M14 3h2m5 5v2m-2-7c1.1046 0 2 .8954 2 2m0 8c0 1.1046-.8954 2-2 2M9 5c0-1.1046.8954-2 2-2"
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
      d="M3 14v2m6-7h4c1.1046 0 2 .8954 2 2v4m-5 6H8m-3 0c-1.1046 0-2-.8954-2-2m12 0c0 1.1046-.8954 2-2 2M3 11c0-1.1046.8954-2 2-2"
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
const ForwardRef = forwardRef(BooleanGroupIntersect2Icon);
export default ForwardRef;
