import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const CalculatorIcon = (
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
      d="M5 8v10c0 1.6569 1.3431 3 3 3h8c1.6569 0 3-1.3431 3-3V8M5 8h14M5 8V6c0-1.6569 1.3431-3 3-3h8c1.6569 0 3 1.3431 3 3v2"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
      d="M9.75 13.125a.875.875 0 1 0-.0001-1.7501.875.875 0 0 0 .0001 1.7501Zm0 4.5a.875.875 0 1 0-.0001-1.7501.875.875 0 0 0 .0001 1.7501Zm4.5-4.5a.875.875 0 1 0-.0001-1.7501.875.875 0 0 0 .0001 1.7501Zm0 4.5a.875.875 0 1 0-.0001-1.7501.875.875 0 0 0 .0001 1.7501Z"
      fill="currentColor"
      stroke="currentColor"
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
const ForwardRef = forwardRef(CalculatorIcon);
export default ForwardRef;
