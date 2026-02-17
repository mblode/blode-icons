import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const FeatherIcon = (
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
      d="M5 21C5 12.811 7.9374 4.622 16.4512 3.0429c1.6923-.3139 3.115 1.1488 2.3244 2.6396-1.3314 2.5104-3.898 4.1771-3.898 4.1771l.3246.2372c1.0528.7691 1.4917 2.1118.7596 3.1769-1.3368 1.9448-4.2415 4.688-9.9914 4.688"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(FeatherIcon);
export default ForwardRef;
