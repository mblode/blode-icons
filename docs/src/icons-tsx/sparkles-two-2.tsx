import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const SparklesTwo2Icon = (
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
      clipRule="evenodd"
      d="M2 9c4.8611 0 7-2.1389 7-7 0 4.8611 2.1389 7 7 7-4.8611 0-7 2.1389-7 7 0-4.8611-2.1389-7-7-7ZM13 17.5c3.125 0 4.5-1.375 4.5-4.5 0 3.125 1.375 4.5 4.5 4.5-3.125 0-4.5 1.375-4.5 4.5 0-3.125-1.375-4.5-4.5-4.5Z"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(SparklesTwo2Icon);
export default ForwardRef;
