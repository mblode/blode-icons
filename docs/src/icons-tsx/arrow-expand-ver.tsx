import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ArrowExpandVerIcon = (
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
      d="m8 6 4-4m0 0 4 4m-4-4v20m-4-4 4 4m0 0 4-4"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowExpandVerIcon);
export default ForwardRef;
