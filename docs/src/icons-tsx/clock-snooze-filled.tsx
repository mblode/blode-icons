import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ClockSnoozeFilledIcon = (
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
      d="M20.5 9.5a5.52 5.52 0 0 0 1.153-.121c.2263.8353.347 1.7141.347 2.621 0 5.5228-4.4772 10-10 10S2 17.5228 2 12 6.4772 2 12 2c1.1193 0 2.1957.1839 3.2005.5231A5.5 5.5 0 0 0 15 4c0 3.0376 2.4624 5.5 5.5 5.5M13 8c0-.5523-.4477-1-1-1s-1 .4477-1 1v4c0 .2652.1054.5196.2929.7071l2.5 2.5c.3905.3905 1.0237.3905 1.4142 0s.3905-1.0237 0-1.4142L13 11.5858z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
    <path
      clipRule="evenodd"
      d="M18 2c0-.5523.4477-1 1-1h3a1 1 0 0 1 .8 1.6L21 5h1c.5523 0 1 .4477 1 1s-.4477 1-1 1h-3a1 1 0 0 1-.8-1.6L20 3h-1c-.5523 0-1-.4477-1-1"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(ClockSnoozeFilledIcon);
export default ForwardRef;
