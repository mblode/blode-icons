import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Hand5FingerIcon = (
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
      d="M17.0016 7.5c0-.8284.6716-1.5 1.5-1.5s1.5.6716 1.5 1.5v6.3292c0 3.9603-3.2105 7.1708-7.1708 7.1708a7.171 7.171 0 0 1-6.3455-3.831l-2.6788-5.0897a1 1 0 0 1 .104-1.0905l.3417-.4271c.69-.8625 1.9486-1.0023 2.8111-.3123L8.0017 11V5.5c0-.8284.6716-1.5 1.5-1.5s1.5.6716 1.5 1.5m6 2v-2c0-.8284-.6716-1.5-1.5-1.5s-1.5.6716-1.5 1.5m3 2V12m-6-6.5v-1c0-.8284.6716-1.5 1.5-1.5s1.5.6716 1.5 1.5v1m-3 0V11m3-5.5v6"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(Hand5FingerIcon);
export default ForwardRef;
