import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const BucketIcon = (
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
      d="m4.4967 7.998 1.1742 9.3748C5.859 18.8738 7.135 20 8.6477 20h6.7046c1.5127 0 2.7888-1.1262 2.9768-2.6271l1.1743-9.3749z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
      d="M3 4h18v4H3z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(BucketIcon);
export default ForwardRef;
