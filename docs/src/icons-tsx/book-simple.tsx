import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const BookSimpleIcon = (
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
      d="M7 21h9c1.6569 0 3-1.3431 3-3V6c0-1.6569-1.3431-3-3-3H7c-1.1046 0-2 .8954-2 2v14m2 2c-1.1046 0-2-.8954-2-2m2 2h3m-5-2c0-1.1046.8954-2 2-2h9c1.6569 0 3-1.3431 3-3v-2"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(BookSimpleIcon);
export default ForwardRef;
