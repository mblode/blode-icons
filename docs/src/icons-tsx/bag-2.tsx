import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Bag2Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M8.004 8V6c0-1.1046.8953-2 1.9999-2h4c1.1046 0 2 .8954 2 2v2M8.0017 8H6.004c-1.6568 0-3 1.3431-3 3v6c0 1.6569 1.3432 3 3 3h1.9978m0-12H18.004c1.6569 0 3 1.3431 3 3v6c0 1.6569-1.3431 3-3 3H8.0017m0-12v12m8-12v12"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(Bag2Icon);
export default ForwardRef;
