import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const PageTextLockFilledIcon = (
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
      d="M8 2C5.7909 2 4 3.7909 4 6v12c0 2.2091 1.7909 4 4 4h3.1707A3 3 0 0 1 11 21v-4c0-.9807.4706-1.8516 1.1983-2.399C12.8035 12.5205 14.7242 11 17 11a4.978 4.978 0 0 1 3 .9996V6c0-2.2091-1.7909-4-4-4zm0 3c-.5523 0-1 .4477-1 1s.4477 1 1 1h6c.5523 0 1-.4477 1-1s-.4477-1-1-1zm0 4c-.5523 0-1 .4477-1 1s.4477 1 1 1h3c.5523 0 1-.4477 1-1s-.4477-1-1-1z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
    <path
      clipRule="evenodd"
      d="M20 16.2676V16c0-1.6569-1.3431-3-3-3s-3 1.3431-3 3v.2676c-.5978.3458-1 .9921-1 1.7324v2c0 1.1046.8954 2 2 2h4c1.1046 0 2-.8954 2-2v-2c0-.7403-.4022-1.3866-1-1.7324M16 16h2c0-.5523-.4477-1-1-1s-1 .4477-1 1m3 2h-4v2h4z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(PageTextLockFilledIcon);
export default ForwardRef;
