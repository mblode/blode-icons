import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const AnimationElasticIcon = (
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
      d="M4 20S4 4 7 4c2 0 2 7 4.5 7S15 6.7667 20 8.2667"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(AnimationElasticIcon);
export default ForwardRef;
