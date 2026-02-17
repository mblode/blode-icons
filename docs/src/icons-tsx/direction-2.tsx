import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Direction2Icon = (
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
      d="M12 9V4h6.5C19.8807 4 21 5.1193 21 6.5S19.8807 9 18.5 9zm0 0v5m0-5H5.5C4.1193 9 3 10.1193 3 11.5S4.1193 14 5.5 14H12m0 0v6m0 0H8m4 0h4"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(Direction2Icon);
export default ForwardRef;
