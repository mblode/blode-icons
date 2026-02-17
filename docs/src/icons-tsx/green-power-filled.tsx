import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const GreenPowerFilledIcon = (
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
      d="M5.0154 17.572c-2.8603-3.9666-2.6372-8.3395.102-11.3504 2.852-3.135 8.1665-4.5012 14.654-2.6847a1 1 0 0 1 .6933.6934c1.8165 6.4875.4503 11.8019-2.6847 14.6539-3.0109 2.7391-7.3838 2.9622-11.3504.102L4.7088 20.707c-.3905.3905-1.0237.3905-1.4142 0s-.3905-1.0237 0-1.4142zm7.6014-9.63c.303-.3788.9033-.1597.9033.3298v2.1866h1.4714c.4296 0 .6662.5105.3941.8505l-2.999 3.749c-.303.3788-.9033.1596-.9033-.3298v-2.1866h-1.4714c-.4296 0-.6661-.5105-.3941-.8506z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(GreenPowerFilledIcon);
export default ForwardRef;
