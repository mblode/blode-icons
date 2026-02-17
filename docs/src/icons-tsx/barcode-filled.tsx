import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const BarcodeFilledIcon = (
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
      d="M2 8c0-2.2091 1.7909-4 4-4h1c.5523 0 1 .4477 1 1s-.4477 1-1 1H6c-1.1046 0-2 .8954-2 2v1c0 .5523-.4477 1-1 1s-1-.4477-1-1zm14-3c0-.5523.4477-1 1-1h1c2.2091 0 4 1.7909 4 4v1c0 .5523-.4477 1-1 1s-1-.4477-1-1V8c0-1.1046-.8954-2-2-2h-1c-.5523 0-1-.4477-1-1M8 9c.5523 0 1 .4477 1 1v4c0 .5523-.4477 1-1 1s-1-.4477-1-1v-4c0-.5523.4477-1 1-1m4 0c.5523 0 1 .4477 1 1v2c0 .5523-.4477 1-1 1s-1-.4477-1-1v-2c0-.5523.4477-1 1-1m4 0c.5523 0 1 .4477 1 1v4c0 .5523-.4477 1-1 1s-1-.4477-1-1v-4c0-.5523.4477-1 1-1M3 14c.5523 0 1 .4477 1 1v1c0 1.1046.8954 2 2 2h1c.5523 0 1 .4477 1 1s-.4477 1-1 1H6c-2.2091 0-4-1.7909-4-4v-1c0-.5523.4477-1 1-1m18 0c.5523 0 1 .4477 1 1v1c0 2.2091-1.7909 4-4 4h-1c-.5523 0-1-.4477-1-1s.4477-1 1-1h1c1.1046 0 2-.8954 2-2v-1c0-.5523.4477-1 1-1"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(BarcodeFilledIcon);
export default ForwardRef;
