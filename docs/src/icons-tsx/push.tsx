import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const PushIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="m4.5 17.4999-2.5 2.5m4.5-.5-1.5 1.5m-2-8.5s3.77 1.27 5.5 3 3 5.5 3 5.5l2.4524-2.102A3 3 0 0 0 15 16.6201v-1.6202c4-2 6.5-5 6-12-7-.5-10 2-12 6H7.3798a3 3 0 0 0-2.2778 1.0476zm14-4c0 .8285-.6716 1.5-1.5 1.5S14 9.3284 14 8.5 14.6716 7 15.5 7s1.5.6716 1.5 1.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(PushIcon);
export default ForwardRef;
