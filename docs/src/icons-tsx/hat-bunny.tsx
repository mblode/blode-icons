import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const HatBunnyIcon = (
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
      d="M19 12h2m-2 0v6c0 1.6569-1.3431 3-3 3H8c-1.6569 0-3-1.3431-3-3v-6m14 0H5m-2 0h2m1.7453 0c-.2067-.781-.3821-1.6443-.5126-2.5598-.5497-3.8583-.0922-7.183 1.0219-7.4261s2.4629 2.6875 3.0127 6.5457c.175 1.2282.2479 2.4023.2301 3.4402M16.5 12c1-1.5 1.2838-2.8788 1.5-4l1.999.25c3.5.5-2.499-6-4.5-4-1.995 1.994-1.9965 4.2364-1.999 7.7184V12"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(HatBunnyIcon);
export default ForwardRef;
