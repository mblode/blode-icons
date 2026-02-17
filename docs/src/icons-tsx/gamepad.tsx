import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const GamepadIcon = (
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
      d="M8 10v2m0 0v2m0-2h2m-2 0H6m2-6h8c3.3137 0 6 2.6863 6 6s-2.6863 6-6 6H8c-3.3137 0-6-2.6863-6-6s2.6863-6 6-6"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
      d="M13.875 13.5a.875.875 0 1 0 1.7501-.0001.875.875 0 0 0-1.7501.0001Zm3-3a.875.875 0 1 0 1.7501-.0001.875.875 0 0 0-1.7501.0001Z"
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="square"
      strokeWidth={0.75}
      style={{
        fill: "currentColor",
        fillOpacity: 1,
        stroke: "currentColor",
        strokeOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(GamepadIcon);
export default ForwardRef;
