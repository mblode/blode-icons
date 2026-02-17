import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const TimeFliesFilledIcon = (
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
      d="M7 12c0-4.4183 3.5817-8 8-8s8 3.5817 8 8-3.5817 8-8 8-8-3.5817-8-8M2 8c0-.5523.4477-1 1-1h2c.5523 0 1 .4477 1 1s-.4477 1-1 1H3c-.5523 0-1-.4477-1-1m13 0c.5523 0 1 .4477 1 1v2.5858l1.2071 1.2071c.3905.3905.3905 1.0237 0 1.4142s-1.0237.3905-1.4142 0l-1.5-1.5A1 1 0 0 1 14 12V9c0-.5523.4477-1 1-1M1 12c0-.5523.4477-1 1-1h2c.5523 0 1 .4477 1 1s-.4477 1-1 1H2c-.5523 0-1-.4477-1-1m1 4c0-.5523.4477-1 1-1h2c.5523 0 1 .4477 1 1s-.4477 1-1 1H3c-.5523 0-1-.4477-1-1"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(TimeFliesFilledIcon);
export default ForwardRef;
