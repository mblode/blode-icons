import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const CreditCard2FilledIcon = (
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
      d="M6 4C3.7909 4 2 5.7909 2 8v1h20V8c0-2.2091-1.7909-4-4-4z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
    <path
      clipRule="evenodd"
      d="M2 16v-5h20v5c0 2.2091-1.7909 4-4 4H6c-2.2091 0-4-1.7909-4-4m5-3c-.5523 0-1 .4477-1 1s.4477 1 1 1h3c.5523 0 1-.4477 1-1s-.4477-1-1-1z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(CreditCard2FilledIcon);
export default ForwardRef;
