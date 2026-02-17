import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ColumnWideAddFilledIcon = (
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
      d="M18 6h-5v13c0 .5523-.4477 1-1 1H6c-2.2091 0-4-1.7909-4-4V8c0-2.2091 1.7909-4 4-4h12c2.2091 0 4 1.7909 4 4v2c0 .5523-.4477 1-1 1s-1-.4477-1-1V8c0-1.1046-.8954-2-2-2"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
    <path
      d="M20 14c0-.5523-.4477-1-1-1s-1 .4477-1 1v2h-2c-.5523 0-1 .4477-1 1s.4477 1 1 1h2v2c0 .5523.4477 1 1 1s1-.4477 1-1v-2h2c.5523 0 1-.4477 1-1s-.4477-1-1-1h-2z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(ColumnWideAddFilledIcon);
export default ForwardRef;
