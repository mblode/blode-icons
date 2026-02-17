import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const VaultFilledIcon = (
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
      d="M7 3C4.7909 3 3 4.7909 3 7v8c0 1.8638 1.2748 3.4299 3 3.874V20c0 .5523.4477 1 1 1s1-.4477 1-1v-1h8v1c0 .5523.4477 1 1 1s1-.4477 1-1v-1.126c1.7252-.4441 3-2.0102 3-3.874V7c0-2.2091-1.7909-4-4-4zm9 8c0 2.2091-1.7909 4-4 4-1.8638 0-3.43-1.2748-3.874-3H11c.5523 0 1-.4477 1-1s-.4477-1-1-1H8.126C8.57 8.2748 10.1362 7 12 7c2.2091 0 4 1.7909 4 4"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(VaultFilledIcon);
export default ForwardRef;
