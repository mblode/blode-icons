import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const AnimationUndershootIcon = (
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
      d="M4 15c.5333 2 .5333 5 2.6667 5C10.9333 20 9.3333 4 20 4"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(AnimationUndershootIcon);
export default ForwardRef;
