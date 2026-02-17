import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const TextSizeFilledIcon = (
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
      d="M10 4c-.5523 0-1 .4477-1 1s.4477 1 1 1h5v14c0 .5523.4477 1 1 1s1-.4477 1-1V6h5c.5523 0 1-.4477 1-1s-.4477-1-1-1z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
    <path
      d="M5.9268 20v-8H2c-.5523 0-1-.4477-1-1s.4477-1 1-1h4.8822a1 1 0 0 1 .0892 0H12c.5523 0 1 .4477 1 1s-.4477 1-1 1H7.9268v8c0 .5523-.4478 1-1 1s-1-.4477-1-1"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(TextSizeFilledIcon);
export default ForwardRef;
