import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const BackpackIcon = (
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
      d="M15 11h2c1.6569 0 3-1.3431 3-3V7c0-1.1046-.8954-2-2-2h-3m0 6H9m6 0v2m-6-2H7c-1.6569 0-3-1.3431-3-3V7c0-1.1046.8954-2 2-2h3m0 6v2m-4-2v7c0 1.6569 1.3431 3 3 3h8c1.6569 0 3-1.3431 3-3v-7M9 5h6M9 5c0-1.6568 1.3431-3 3-3s3 1.3432 3 3m-5 12h4"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(BackpackIcon);
export default ForwardRef;
