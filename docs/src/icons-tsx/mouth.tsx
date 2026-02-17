import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const MouthIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M1.5 11.3726s2.9381-6.3562 6.5625-6.3562C9.6834 5.0164 12 6.2877 12 6.2877s1.9089-1.1294 3.2812-1.2713c3.7884-.3917 7.2188 6.3562 7.2188 6.3562m-21 0s6.3761-1.706 10.5-1.706 10.5 1.706 10.5 1.706m-21 0S4.65 19 12 19s10.5-7.6274 10.5-7.6274m-21 0s6.2695 2.9607 10.5 2.9607 10.5-2.9607 10.5-2.9607"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(MouthIcon);
export default ForwardRef;
