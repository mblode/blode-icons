import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const CalendarCheck4FilledIcon = (
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
      d="M8 2c.5523 0 1 .4477 1 1v1h6V3c0-.5523.4477-1 1-1s1 .4477 1 1v1c2.2091 0 4 1.7909 4 4v9c0 2.2091-1.7909 4-4 4H7c-2.2091 0-4-1.7909-4-4V8c0-2.2091 1.7909-4 4-4V3c0-.5523.4477-1 1-1m7.2071 8.0429c.3905.3905.3905 1.0237 0 1.4142l-3.5 3.5a1 1 0 0 1-1.4142 0l-1.5-1.5c-.3905-.3905-.3905-1.0237 0-1.4142s1.0237-.3905 1.4142 0l.7929.7929 2.7929-2.7929c.3905-.3905 1.0237-.3905 1.4142 0"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(CalendarCheck4FilledIcon);
export default ForwardRef;
