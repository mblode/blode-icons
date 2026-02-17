import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const HistoryFilledIcon = (
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
      d="M4 5.9993V5c0-.5523-.4477-1-1-1s-1 .4477-1 1v4c0 .5523.4477 1 1 1h4c.5523 0 1-.4477 1-1s-.4477-1-1-1H5.07C6.454 5.6075 9.0402 4 12 4c4.4182 0 8 3.5817 8 8s-3.5818 8-8 8c-3.4817 0-6.4464-2.2247-7.545-5.3332-.1841-.5208-.7555-.7937-1.2762-.6096s-.7936.7553-.6095 1.276C3.9416 19.2159 7.6443 22 12 22c5.5228 0 10-4.4772 10-10S17.5228 2 12 2C8.7276 2 5.8238 3.5716 4 5.9993M12 7c.5523 0 1 .4477 1 1v3.5858l2.7071 2.7071c.3905.3905.3905 1.0237 0 1.4142s-1.0237.3905-1.4142 0l-3-3A1 1 0 0 1 11 12V8c0-.5523.4477-1 1-1"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(HistoryFilledIcon);
export default ForwardRef;
