import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ApiConnectionIcon = (
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
      d="M4 12c0 4.4183 3.5817 8 8 8 2.9611 0 5.5465-1.6088 6.9297-4M4 12c0-4.4183 3.5817-8 8-8 2.9611 0 5.5465 1.6088 6.9297 4M4 12H2m14 0c0 2.2091-1.7909 4-4 4s-4-1.7909-4-4 1.7909-4 4-4 4 1.7909 4 4m0 0h6"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(ApiConnectionIcon);
export default ForwardRef;
