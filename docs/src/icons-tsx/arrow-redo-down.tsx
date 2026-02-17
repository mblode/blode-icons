import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ArrowRedoDownIcon = (
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
      d="m17.5 19 2.9393-2.9393c.5858-.5858.5858-1.5356 0-2.1214L17.5 11m2.5 4H7.5C5.0147 15 3 12.9853 3 10.5S5.0147 6 7.5 6H12"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowRedoDownIcon);
export default ForwardRef;
