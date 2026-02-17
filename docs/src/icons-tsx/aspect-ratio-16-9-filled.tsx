import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const AspectRatio169FilledIcon = (
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
      d="M5 5C2.7909 5 1 6.7909 1 9v6c0 2.2091 1.7909 4 4 4h14c2.2091 0 4-1.7909 4-4V9c0-2.2091-1.7909-4-4-4z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(AspectRatio169FilledIcon);
export default ForwardRef;
