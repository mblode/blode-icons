import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const RescueRingIcon = (
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
      d="m18.5 5.5-3.6341 3.6341m-5.737 5.737L5.5 18.5m0-13 3.6289 3.6289m5.737 5.737L18.5 18.5M21 12c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9Zm-5 0c0 2.2091-1.7909 4-4 4s-4-1.7909-4-4 1.7909-4 4-4 4 1.7909 4 4Z"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(RescueRingIcon);
export default ForwardRef;
