import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ArrowRotateLeftRightIcon = (
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
      d="M5 4v3c0 .5523.4477 1 1 1h2.75m10.2618 12v-3c0-.5523-.4477-1-1-1h-3M4 12c0 4.4183 3.5817 8 8 8 2.6362 0 5.0303-1.2751 6.5-3.2422M20 12c0-4.4183-3.5817-8-8-8-2.6362 0-5.0303 1.2751-6.5 3.2422"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowRotateLeftRightIcon);
export default ForwardRef;
