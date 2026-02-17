import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const GreenPowerIcon = (
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
      d="M13.5184 8.2718c0-.4894-.6003-.7086-.9033-.3298l-2.999 3.749c-.272.34-.0355.8506.3941.8506h1.4714v2.1866c0 .4894.6003.7086.9033.3298l2.999-3.749c.2721-.34.0355-.8506-.3941-.8506h-1.4714z"
      fill="currentColor"
    />
    <path
      d="m4.0015 19.9999 2.3431-2.3431m0 0C.0015 9.9999 7.0016.9999 19.5016 4.4999 23.0015 17 14.0015 24 6.3446 17.6568"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(GreenPowerIcon);
export default ForwardRef;
