import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const AtomIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M19.4739 4.5261c1.5724 1.5725-.499 6.1934-4.6267 10.3211s-8.7486 6.1991-10.321 4.6267.4989-6.1934 4.6266-10.321C13.2805 5.025 17.9014 2.9536 19.474 4.526Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M19.4739 19.4739c-1.5725 1.5724-6.1934-.499-10.321-4.6267C5.025 10.7195 2.9536 6.0986 4.526 4.5262s6.1934.4989 10.3211 4.6266 6.1991 8.7486 4.6267 10.3211Z"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(AtomIcon);
export default ForwardRef;
