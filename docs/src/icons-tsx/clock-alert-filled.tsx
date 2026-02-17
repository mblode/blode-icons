import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ClockAlertFilledIcon = (
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
      d="M1.2929 4.5429c-.3905.3905-.3905 1.0237 0 1.4142s1.0237.3905 1.4142 0l3-3c.3905-.3905.3905-1.0237 0-1.4142s-1.0237-.3905-1.4142 0zM19.7071 1.5429c-.3905-.3905-1.0237-.3905-1.4142 0s-.3905 1.0237 0 1.4142l3 3c.3905.3905 1.0237.3905 1.4142 0s.3905-1.0237 0-1.4142z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
    <path
      clipRule="evenodd"
      d="M21.9998 12c0 5.5228-4.4771 10-10 10s-10-4.4772-10-10 4.4772-10 10-10 10 4.4772 10 10m-10-5c.5523 0 1 .4477 1 1v3.5858l2.2072 2.2071c.3905.3905.3905 1.0237 0 1.4142s-1.0237.3905-1.4143 0l-2.5-2.5A1 1 0 0 1 10.9998 12V8c0-.5523.4478-1 1-1"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(ClockAlertFilledIcon);
export default ForwardRef;
