import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const MathLessThanCircleIcon = (
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
      d="M3 12c0 4.9706 4.0294 9 9 9s9-4.0294 9-9-4.0294-9-9-9-9 4.0294-9 9Z"
      stroke="currentColor"
      strokeWidth={2}
      style={{
        stroke: "currentColor",
        strokeOpacity: 1,
      }}
    />
    <path
      d="m14.5 9-6 3 6 3"
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
const ForwardRef = forwardRef(MathLessThanCircleIcon);
export default ForwardRef;
