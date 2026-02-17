import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const NewspaperIcon = (
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
      d="M16 12V7c0-1.6569-1.3431-3-3-3H6C4.3431 4 3 5.3431 3 7v10.5C3 18.8807 4.1193 20 5.5 20h13M16 12v5.5c0 1.3807 1.1193 2.5 2.5 2.5M16 12h2.5c1.3807 0 2.5 1.1193 2.5 2.5v3c0 1.3807-1.1193 2.5-2.5 2.5M7 16h5M7 8h5v4H7z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(NewspaperIcon);
export default ForwardRef;
