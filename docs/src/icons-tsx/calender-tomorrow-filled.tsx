import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const CalenderTomorrowFilledIcon = (
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
      d="M3 7c0-2.2091 1.7909-4 4-4h10c2.2091 0 4 1.7909 4 4v10c0 2.2091-1.7909 4-4 4H7c-2.2091 0-4-1.7909-4-4zm16 2H5v8c0 1.1046.8954 2 2 2h10c1.1046 0 2-.8954 2-2zm-8.4571 2.5429c.3905-.3905 1.0237-.3905 1.4142 0l1.75 1.75c.3905.3905.3905 1.0237 0 1.4142l-1.75 1.75c-.3905.3905-1.0237.3905-1.4142 0s-.3905-1.0237 0-1.4142L11.5858 14l-1.0429-1.0429c-.3905-.3905-.3905-1.0237 0-1.4142"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(CalenderTomorrowFilledIcon);
export default ForwardRef;
