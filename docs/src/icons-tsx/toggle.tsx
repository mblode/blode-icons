import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ToggleIcon = (
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
    <rect
      height={14}
      rx={7}
      stroke="currentColor"
      strokeWidth={2}
      width={21}
      x={1.5}
      y={5}
    />
    <circle cx={8.5} cy={12} fill="currentColor" r={3} />
  </svg>
);
const ForwardRef = forwardRef(ToggleIcon);
export default ForwardRef;
