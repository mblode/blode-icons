import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const SquareBehindSquare1Icon = (
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
      d="M15 9V5.25C15 4.0074 13.9926 3 12.75 3h-7.5C4.0074 3 3 4.0074 3 5.25v7.5C3 13.9926 4.0074 15 5.25 15H9m2.25-6h7.5C19.9926 9 21 10.0074 21 11.25v7.5c0 1.2426-1.0074 2.25-2.25 2.25h-7.5C10.0074 21 9 19.9926 9 18.75v-7.5C9 10.0074 10.0074 9 11.25 9"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(SquareBehindSquare1Icon);
export default ForwardRef;
