import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ArrowPathRightFilledIcon = (
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
      d="M15.4603 4.415C14.4833 3.6008 13 4.2956 13 5.5673v2.4325H6c-2.2091 0-4 1.7909-4 4s1.7909 4 4 4h7v2.4325c0 1.2717 1.4833 1.9665 2.4603 1.1523l6.7971-5.6642c1.1994-.9995 1.1994-2.8417 0-3.8412z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowPathRightFilledIcon);
export default ForwardRef;
