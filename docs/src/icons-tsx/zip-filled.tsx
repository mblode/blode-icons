import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ZipFilledIcon = (
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
      d="M11 16.0001v-1h2v1c0 .5522-.4477 1-1 1s-1-.4478-1-1"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
    <path
      clipRule="evenodd"
      d="M3 7c0-2.2091 1.7909-4 4-4h10c2.2092 0 4 1.7909 4 4v10.0001c0 2.2091-1.7908 4-4 4H7c-2.2091 0-4-1.7909-4-4.0001zm7-2c-.5523 0-1 .4478-1 1s.4477 1 1 1h4c.5523 0 1-.4477 1-1s-.4477-1-1-1zm-1 5.0001c0-.5523.4477-1 1-1h4c.5523 0 1 .4477 1 1s-.4477 1-1 1h-4c-.5523 0-1-.4478-1-1m1 3c-.5523 0-1 .4477-1 1v2c0 1.6568 1.3431 3 3 3s3-1.3432 3-3v-2c0-.5523-.4477-1-1-1z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(ZipFilledIcon);
export default ForwardRef;
