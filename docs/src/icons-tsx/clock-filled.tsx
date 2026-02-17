import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ClockFilledIcon = (
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
      d="M12 22c5.5228 0 10-4.4772 10-10S17.5228 2 12 2 2 6.4772 2 12s4.4772 10 10 10m1-14c0-.5523-.4477-1-1-1s-1 .4477-1 1v4c0 .2652.1054.5196.2929.7071l2.5 2.5c.3905.3905 1.0237.3905 1.4142 0s.3905-1.0237 0-1.4142L13 11.5858z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(ClockFilledIcon);
export default ForwardRef;
