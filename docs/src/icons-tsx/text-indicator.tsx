import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const TextIndicatorIcon = (
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
      d="M3 6h5m0 0h5M8 6v12m9-15h2m0 0h2m-2 0v18m0 0h-2m2 0h2"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(TextIndicatorIcon);
export default ForwardRef;
