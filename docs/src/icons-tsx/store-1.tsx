import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Store1Icon = (
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
      d="m21 8-2.1-2.8A3 3 0 0 0 16.5 4h-9a3 3 0 0 0-2.4 1.2L3 8m18 0v1c0 .8885-.3863 1.6868-1 2.2361M21 8H3m0 0v1c0 .8885.3863 1.6868 1 2.2361M15 9c0 1.6569 1.3431 3 3 3a2.99 2.99 0 0 0 2-.7639M15 9V8m0 1c0 1.6569-1.3431 3-3 3s-3-1.3431-3-3m0 0c0 1.6569-1.3431 3-3 3a2.99 2.99 0 0 1-2-.7639M9 9V8m5 12v-3c0-1.1046-.8954-2-2-2s-2 .8954-2 2v3m-6-8.7639V17c0 1.6569 1.3431 3 3 3h10c1.6569 0 3-1.3431 3-3v-5.7639"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(Store1Icon);
export default ForwardRef;
