import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ArrowCornerLeftDownFilledIcon = (
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
      d="M20 4c0 .5523-.4477 1-1 1h-7c-1.1046 0-2 .8954-2 2v10.5858l2.2929-2.2929c.3905-.3905 1.0237-.3905 1.4142 0s.3905 1.0237 0 1.4142l-4 4c-.3905.3905-1.0237.3905-1.4142 0l-4-4c-.3905-.3905-.3905-1.0237 0-1.4142s1.0237-.3905 1.4142 0L8 17.5858V7c0-2.2091 1.7909-4 4-4h7c.5523 0 1 .4477 1 1"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowCornerLeftDownFilledIcon);
export default ForwardRef;
