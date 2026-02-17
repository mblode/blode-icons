import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const SparkleIcon = (
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
      d="M21 12.5c-6.25 0-9 2.9028-9 9.5 0-6.5972-2.75-9.5-9-9.5 6.25 0 9-2.9028 9-9.5 0 6.5972 2.75 9.5 9 9.5Z"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(SparkleIcon);
export default ForwardRef;
