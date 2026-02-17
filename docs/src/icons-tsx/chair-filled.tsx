import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ChairFilledIcon = (
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
      d="M5 6c0-2.2091 1.7909-4 4-4h6c2.2091 0 4 1.7909 4 4v1c0 1.4806-.8044 2.7733-2 3.4649V13h2c.5523 0 1 .4477 1 1s-.4477 1-1 1v6c0 .5523-.4477 1-1 1s-1-.4477-1-1v-2H7v2c0 .5523-.4477 1-1 1s-1-.4477-1-1v-6c-.5523 0-1-.4477-1-1s.4477-1 1-1h2v-2.5351C5.8044 9.7733 5 8.4806 5 7zm4 5v2h6v-2zm8 4v2H7v-2z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(ChairFilledIcon);
export default ForwardRef;
