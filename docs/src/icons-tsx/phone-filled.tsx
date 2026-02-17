import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const PhoneFilledIcon = (
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
      clipRule="evenodd"
      d="M5 5c0-2.2091 1.7909-4 4-4h6c2.2091 0 4 1.7909 4 4v14c0 2.2091-1.7909 4-4 4H9c-2.2091 0-4-1.7909-4-4zm5 13c-.5523 0-1 .4477-1 1s.4477 1 1 1h4c.5523 0 1-.4477 1-1s-.4477-1-1-1z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(PhoneFilledIcon);
export default ForwardRef;
