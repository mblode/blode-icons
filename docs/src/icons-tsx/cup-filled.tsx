import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const CupFilledIcon = (
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
      d="M3 4c0-.5523.4477-1 1-1h12c.5523 0 1 .4477 1 1v2c2.2091 0 4 1.7909 4 4s-1.7909 4-4 4v3c0 2.2091-1.7909 4-4 4H7c-2.2091 0-4-1.7909-4-4zm14 8c1.1046 0 2-.8954 2-2s-.8954-2-2-2z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(CupFilledIcon);
export default ForwardRef;
