import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const StudioDisplayFilledIcon = (
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
      d="M2 8c0-2.2091 1.7909-4 4-4h12c2.2091 0 4 1.7909 4 4v6c0 2.2091-1.7909 4-4 4h-2v2c0 .5523-.4477 1-1 1H9c-.5523 0-1-.4477-1-1v-2H6c-2.2091 0-4-1.7909-4-4zm8 10v1h4v-1z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(StudioDisplayFilledIcon);
export default ForwardRef;
