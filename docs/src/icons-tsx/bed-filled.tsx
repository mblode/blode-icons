import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const BedFilledIcon = (
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
      d="M4 8c0-2.2091 1.7909-4 4-4h3v5H4zM13 9V4h3c2.2091 0 4 1.7909 4 4v1zM18 11c2.2091 0 4 1.7909 4 4v1c0 1.1046-.8954 2-2 2v1c0 .5523-.4477 1-1 1s-1-.4477-1-1v-1H6v1c0 .5523-.4477 1-1 1s-1-.4477-1-1v-1c-1.1046 0-2-.8954-2-2v-1c0-2.2091 1.7909-4 4-4z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(BedFilledIcon);
export default ForwardRef;
