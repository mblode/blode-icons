import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const PageLockFilledIcon = (
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
      d="M4 6c0-2.2091 1.7909-4 4-4h8c2.2091 0 4 1.7909 4 4v5.9996A4.978 4.978 0 0 0 17 11c-2.2758 0-4.1965 1.5205-4.8017 3.601C11.4706 15.1484 11 16.0193 11 17v4c0 .3506.0602.6872.1707 1H8c-2.2091 0-4-1.7909-4-4z"
      fill="currentColor"
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
const ForwardRef = forwardRef(PageLockFilledIcon);
export default ForwardRef;
