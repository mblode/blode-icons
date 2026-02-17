import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const RandomIcon = (
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
      d="M12 3v3m0 12v3M18.3643 5.6357l-2.1214 2.1214M16.2427 16.2422l2.1213 2.1213M18 12h3"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
      d="M12 12H3"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
    />
    <path
      d="m5.6363 18.3639 6.3639-6.3637-6.364-6.3645"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(RandomIcon);
export default ForwardRef;
