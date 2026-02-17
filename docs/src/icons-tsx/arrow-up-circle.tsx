import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ArrowUpCircleIcon = (
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
      d="M12 16V8m0 0-3 3m3-3 3 3m-3-8c4.9706 0 9 4.0294 9 9s-4.0294 9-9 9-9-4.0294-9-9 4.0294-9 9-9"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowUpCircleIcon);
export default ForwardRef;
