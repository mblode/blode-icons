import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const CalendarClockIcon = (
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
      d="m2.7588 10.1637.8682 4.924c.2877 1.6317 1.8437 2.7212 3.4754 2.4335l2.9948-.5281m-7.3384-6.8294-.1737-.9848c-.2877-1.6317.8018-3.1877 2.4335-3.4754l6.8937-1.2155c1.6317-.2877 3.1876.8018 3.4753 2.4334.0959.544-.2672 1.0626-.8111 1.1585zM16.0017 12v2l1.6667 1.6667M22.0017 14c0 3.3137-2.6863 6-6 6s-6-2.6863-6-6 2.6863-6 6-6 6 2.6863 6 6"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(CalendarClockIcon);
export default ForwardRef;
