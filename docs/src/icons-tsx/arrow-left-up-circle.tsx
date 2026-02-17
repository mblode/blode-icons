import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ArrowLeftUpCircleIcon = (
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
      d="M15 15 9.5 9.5M9 14V9h5M3 12c0-4.9706 4.0294-9 9-9s9 4.0294 9 9-4.0294 9-9 9-9-4.0294-9-9"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowLeftUpCircleIcon);
export default ForwardRef;
