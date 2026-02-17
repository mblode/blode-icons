import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const BatteryEmptyFilledIcon = (
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
      d="M1 9c0-2.2091 1.7909-4 4-4h11c1.8638 0 3.4299 1.2748 3.874 3h.626c1.3807 0 2.5 1.1193 2.5 2.5v3c0 1.3807-1.1193 2.5-2.5 2.5h-.626c-.4441 1.7252-2.0102 3-3.874 3H5c-2.2091 0-4-1.7909-4-4zm19 5h.5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5H20z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(BatteryEmptyFilledIcon);
export default ForwardRef;
