import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Bubble4FilledIcon = (
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
      d="M17.002 3c2.2091 0 4 1.7909 4 4v9c0 2.2091-1.7909 4-4 4H8.2888L4.532 22.348a1 1 0 0 1-1.53-.848V7c0-2.2091 1.7908-4 4-4z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(Bubble4FilledIcon);
export default ForwardRef;
