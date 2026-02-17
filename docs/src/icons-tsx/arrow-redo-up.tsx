import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ArrowRedoUpIcon = (
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
      d="m17.5 5 2.9393 2.9393c.5858.5858.5858 1.5356 0 2.1214L17.5 13M20 9H7.5C5.0147 9 3 11.0147 3 13.5S5.0147 18 7.5 18H12"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowRedoUpIcon);
export default ForwardRef;
