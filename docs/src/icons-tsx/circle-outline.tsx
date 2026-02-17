import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const CircleOutlineIcon = (
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
    <circle cx={12} cy={12} r={9} stroke="currentColor" strokeWidth={2} />
  </svg>
);
const ForwardRef = forwardRef(CircleOutlineIcon);
export default ForwardRef;
