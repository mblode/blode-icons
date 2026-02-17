import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ShareArrowDownFilledIcon = (
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
      d="M13 2c0-.5523-.4477-1-1-1s-1 .4477-1 1v2H7C4.7909 4 3 5.7909 3 8v9c0 2.2091 1.7909 4 4 4h10c2.2091 0 4-1.7909 4-4V8c0-2.2091-1.7909-4-4-4h-4zm0 2h-2v8.0858l-1.7929-1.7929c-.3905-.3905-1.0237-.3905-1.4142 0s-.3905 1.0237 0 1.4142l3.5 3.5c.3905.3905 1.0237.3905 1.4142 0l3.5-3.5c.3905-.3905.3905-1.0237 0-1.4142s-1.0237-.3905-1.4142 0L13 12.0858z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(ShareArrowDownFilledIcon);
export default ForwardRef;
