import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const AirpodLeftIcon = (
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
      d="M16 14v6h3M8 12.7439V18.5c0 .8284-.6716 1.5-1.5 1.5S5 19.3284 5 18.5v-10C5 6.0147 7.0147 4 9.5 4a4.5 4.5 0 0 1 1.0395.1207C11.5137 4.351 12 5.3587 12 6.3597v4.2806c0 1.0011-.4863 2.0087-1.4605 2.239A4.5 4.5 0 0 1 9.5 13a4.49 4.49 0 0 1-1.5-.2561m0 0V12"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(AirpodLeftIcon);
export default ForwardRef;
