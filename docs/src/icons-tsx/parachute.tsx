import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ParachuteIcon = (
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
    <rect
      height={4}
      rx={2}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      style={{
        stroke: "currentColor",
        strokeOpacity: 1,
      }}
      width={4}
      x={10}
      y={17}
    />
    <path
      d="M22 13c0-5.5228-4.4772-10-10-10S2 7.4772 2 13m20 0-7.5 5.5M22 13c-3.4334-2.3703-6.7167-3.5555-10-3.5555M2 13l7.5 5.5M2 13c3.4334-2.3703 6.7167-3.5555 10-3.5555m0 0V17"
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
const ForwardRef = forwardRef(ParachuteIcon);
export default ForwardRef;
