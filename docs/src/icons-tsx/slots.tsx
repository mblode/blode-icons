import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const SlotsIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M2 8V7c0-1.6569 1.3432-3 3-3h2s.25-2 2.5-2S12 4 12 4h2c1.6569 0 3 1.3431 3 3v1M2 8v8m0-8h5m10 0v8m0-8h-5m5 8v1c0 1.6569-1.3431 3-3 3H5c-1.6568 0-3-1.3431-3-3v-1m15 0h-5M2 16h5m0 0V8m0 8h5M7 8h5m0 0v8m5-1h1.5c1.6569 0 3-1.3431 3-3v-2m0 0c.8284 0 1.5-.6716 1.5-1.5S22.3284 7 21.5 7 20 7.6716 20 8.5s.6716 1.5 1.5 1.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
      d="M3.75 11.75a.75.75 0 0 1 1.5 0v.5a.75.75 0 0 1-1.5 0zM8.75 11.75a.75.75 0 0 1 1.5 0v.5a.75.75 0 0 1-1.5 0zM13.75 11.75a.75.75 0 0 1 1.5 0v.5a.75.75 0 0 1-1.5 0z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(SlotsIcon);
export default ForwardRef;
