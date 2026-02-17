import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const PackageInFilledIcon = (
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
      d="M7 5c-1.1046 0-2 .8954-2 2v10c0 1.1046.8954 2 2 2h4c.5523 0 1 .4477 1 1s-.4477 1-1 1H7c-2.2091 0-4-1.7909-4-4V7c0-2.2091 1.7909-4 4-4h10c2.2091 0 4 1.7909 4 4v3c0 .5523-.4477 1-1 1s-1-.4477-1-1V7c0-1.1046-.8954-2-2-2h-1v2c0 1.6569-1.3431 3-3 3h-2c-1.6569 0-3-1.3431-3-3V5zm10.2071 8.2929c.3905.3905.3905 1.0237 0 1.4142L16.9142 15H19c1.6569 0 3 1.3431 3 3v2c0 .5523-.4477 1-1 1s-1-.4477-1-1v-2c0-.5523-.4477-1-1-1h-2.0858l.2929.2929c.3905.3905.3905 1.0237 0 1.4142s-1.0237.3905-1.4142 0l-2-2c-.3905-.3905-.3905-1.0237 0-1.4142l2-2c.3905-.3905 1.0237-.3905 1.4142 0"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(PackageInFilledIcon);
export default ForwardRef;
