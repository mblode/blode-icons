import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const AutoCorrectIcon = (
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
      d="m3 19 7-16 4.8125 11H5.5M14 18.6667 16.3333 21 21 14"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(AutoCorrectIcon);
export default ForwardRef;
