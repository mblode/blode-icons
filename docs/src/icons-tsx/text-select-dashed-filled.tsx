import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const TextSelectDashedFilledIcon = (
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
      d="M4 2C2.3432 2 1 3.3432 1 5c0 1.3062.8348 2.4175 2 2.8293V18c0 .5523.4477 1 1 1s1-.4477 1-1V7.8293C6.1652 7.4175 7 6.3063 7 5c0-1.6568-1.3431-3-3-3M21 6c0-.5523-.4477-1-1-1s-1 .4477-1 1v10.1707c-1.1652.4118-2 1.5231-2 2.8293 0 1.6569 1.3431 3 3 3s3-1.3431 3-3c0-1.3062-.8348-2.4175-2-2.8293zM7 18c0-.5523.4477-1 1-1h1c.5523 0 1 .4477 1 1s-.4477 1-1 1H8c-.5523 0-1-.4477-1-1M13 17c-.5523 0-1 .4477-1 1s.4477 1 1 1h1c.5523 0 1-.4477 1-1s-.4477-1-1-1zM9 6c0-.5523.4477-1 1-1h1c.5523 0 1 .4477 1 1s-.4477 1-1 1h-1c-.5523 0-1-.4477-1-1M15 5c-.5523 0-1 .4477-1 1s.4477 1 1 1h1c.5523 0 1-.4477 1-1s-.4477-1-1-1z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(TextSelectDashedFilledIcon);
export default ForwardRef;
