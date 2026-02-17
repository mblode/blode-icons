import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const AspectRatio219FilledIcon = (
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
      d="M4 6c-2.2091 0-4 1.7909-4 4v4c0 2.2091 1.7909 4 4 4h16c2.2091 0 4-1.7909 4-4v-4c0-2.2091-1.7909-4-4-4z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(AspectRatio219FilledIcon);
export default ForwardRef;
