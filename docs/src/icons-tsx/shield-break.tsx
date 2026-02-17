import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ShieldBreakIcon = (
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
      d="M4 6v7c0 4.4183 3.5817 8 8 8 2.815 0 5.2905-1.454 6.7163-3.6519M8 4.25l2.7975-1.224a3 3 0 0 1 2.405 0l5 2.1876A3 3 0 0 1 20 7.962V13q0 .2519-.0154.5M2 4l20 16"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(ShieldBreakIcon);
export default ForwardRef;
