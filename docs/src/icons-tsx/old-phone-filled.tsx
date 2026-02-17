import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const OldPhoneFilledIcon = (
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
      d="M5 1c.5523 0 1 .4477 1 1v1.5351A3.98 3.98 0 0 1 8 3h8c2.2091 0 4 1.7909 4 4v10c0 2.7614-2.2386 5-5 5H9c-2.7614 0-5-2.2386-5-5V2c0-.5523.4477-1 1-1m4 6c-.5523 0-1 .4477-1 1v5c0 .5523.4477 1 1 1h6c.5523 0 1-.4477 1-1V8c0-.5523-.4477-1-1-1z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(OldPhoneFilledIcon);
export default ForwardRef;
