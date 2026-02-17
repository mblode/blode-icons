import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ShieldCheck2Icon = (
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
      d="m9.5 12.25 1.5 1.5 3.5-3.5M7 4h10c1.6569 0 3 1.3431 3 3v9.1459a3 3 0 0 1-1.6584 2.6833l-5 2.5a3 3 0 0 1-2.6832 0l-5-2.5A3 3 0 0 1 4 16.1459V7c0-1.6569 1.3431-3 3-3"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(ShieldCheck2Icon);
export default ForwardRef;
