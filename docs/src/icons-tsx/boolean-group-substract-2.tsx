import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const BooleanGroupSubstract2Icon = (
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
      d="M9 9H6c-1.6569 0-3 1.3431-3 3v6c0 1.6569 1.3431 3 3 3h6c1.6569 0 3-1.3431 3-3v-3"
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
      d="M9 9v4c0 1.1046.8954 2 2 2v0h4M9 5c0-1.1046.8954-2 2-2v0m8 0c1.1046 0 2 .8954 2 2v0m-7-2h2m5 5v2m0 3c0 1.1046-.8954 2-2 2v0"
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
const ForwardRef = forwardRef(BooleanGroupSubstract2Icon);
export default ForwardRef;
