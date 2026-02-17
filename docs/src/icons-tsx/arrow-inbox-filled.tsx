import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ArrowInboxFilledIcon = (
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
      d="M4 14c.5523 0 1 .4477 1 1v2c0 1.1046.8954 2 2 2h10c1.1046 0 2-.8954 2-2v-2c0-.5523.4477-1 1-1s1 .4477 1 1v2c0 2.2091-1.7909 4-4 4H7c-2.2091 0-4-1.7909-4-4v-2c0-.5523.4477-1 1-1"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
    <path
      clipRule="evenodd"
      d="M12 15.5c.2652 0 .5196-.1054.7071-.2929l3.5-3.5c.3905-.3905.3905-1.0237 0-1.4142s-1.0237-.3905-1.4142 0L13 12.0858V4c0-.5523-.4477-1-1-1s-1 .4477-1 1v8.0858l-1.7929-1.7929c-.3905-.3905-1.0237-.3905-1.4142 0s-.3905 1.0237 0 1.4142l3.5 3.5c.1875.1875.4419.2929.7071.2929"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowInboxFilledIcon);
export default ForwardRef;
