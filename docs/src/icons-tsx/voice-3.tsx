import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Voice3Icon = (
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
      d="M22 12c-2.5-1.5-2.5-7-4.5-7s-2 5-4.5 5-2.5-8-5-8-3 8.5-6 10c3 1.5 3.5 10 6 10s2.5-8 5-8 2.5 5 4.5 5 1.5-5.5 4.5-7"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      style={{
        stroke: "currentColor",
        strokeOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(Voice3Icon);
export default ForwardRef;
