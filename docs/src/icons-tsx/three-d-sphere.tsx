import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ThreeDSphereIcon = (
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
      d="M21 12c0 4.9706-4.0294 9-9 9m9-9c0-4.9706-4.0294-9-9-9m9 9c0 1.6569-4.0294 3-9 3s-9-1.3431-9-3m9 9c-4.9706 0-9-4.0294-9-9m9 9c-1.6569 0-3-4.0294-3-9s1.3431-9 3-9m-9 9c0-4.9706 4.0294-9 9-9"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(ThreeDSphereIcon);
export default ForwardRef;
