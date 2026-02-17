import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Car6Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M18.5 17H20c1.1046 0 2-.8954 2-2v-2.5406c0-1.43-1.0094-2.6613-2.4117-2.9417l-1.839-.3678a2 2 0 0 1-1.2078-.7612L14.9 6.2A3 3 0 0 0 12.5 5H5C3.3431 5 2 6.3431 2 8v7c0 1.1046.8954 2 2 2h.5M9.5 17h5"
      stroke="currentColor"
      strokeWidth={2}
    />
    <circle cx={7} cy={16.75} r={2.25} stroke="currentColor" strokeWidth={2} />
    <circle cx={17} cy={16.75} r={2.25} stroke="currentColor" strokeWidth={2} />
  </svg>
);
const ForwardRef = forwardRef(Car6Icon);
export default ForwardRef;
