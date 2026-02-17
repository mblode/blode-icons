import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ThumbtackFilledIcon = (
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
      d="M10.5 2c-2.2091 0-4 1.7909-4 4v1.4993a5.037 5.037 0 0 1-1.4754 3.5619A3.498 3.498 0 0 0 4 13.5348V15c0 .5523.4477 1 1 1h6v5c0 .5523.4477 1 1 1s1-.4477 1-1v-5h6c.5523 0 1-.4477 1-1v-1.4652a3.498 3.498 0 0 0-1.0246-2.4736A5.037 5.037 0 0 1 17.5 7.4992V6c0-2.2091-1.7909-4-4-4z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(ThumbtackFilledIcon);
export default ForwardRef;
