import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const BetaIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M8 14V8.5C8 6.0147 10.0147 4 12.5 4c5.0737 0 5.863 7 .5 7m-5 3v5c0 1.1046-.8954 2-2 2m2-7c0 2.7614 2.2386 5 5 5 6.1821 0 7-8 .5-8"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(BetaIcon);
export default ForwardRef;
