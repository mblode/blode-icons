import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const DeepSearchIcon = (
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
    <circle cx={12} cy={12} r={4} stroke="currentColor" strokeWidth={2} />
    <path
      d="m15 15 2 2"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
    />
    <path
      d="M14.8735 20.5309a9.04 9.04 0 0 1-5.748 0m11.4049-11.405a9.04 9.04 0 0 1 0 5.7481M9.1254 3.4691a9.04 9.04 0 0 1 5.7482 0M3.4686 14.874a9.038 9.038 0 0 1 0-5.748"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(DeepSearchIcon);
export default ForwardRef;
