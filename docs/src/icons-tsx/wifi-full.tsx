import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const WifiFullIcon = (
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
      d="M21 8.0727c-5.249-4.097-12.751-4.097-18 0m3.751 5.2417c3.062-2.388 7.437-2.388 10.499 0"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
      d="M11.125 18.75a.875.875 0 1 0 1.7501-.0001.875.875 0 0 0-1.7501.0001Z"
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
const ForwardRef = forwardRef(WifiFullIcon);
export default ForwardRef;
