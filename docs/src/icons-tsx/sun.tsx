import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const SunIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M12 3V2m0 20v-1m6.3598-15.36.71-.71M4.9302 19.07l.71-.71M21 12h1M2 12h1m15.3598 6.36.71.71M4.9302 4.93l.71.71m9.8953 2.8245c1.9527 1.9526 1.9527 5.1184 0 7.071-1.9526 1.9527-5.1184 1.9527-7.071 0-1.9526-1.9526-1.9526-5.1184 0-7.071s5.1184-1.9526 7.071 0"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(SunIcon);
export default ForwardRef;
