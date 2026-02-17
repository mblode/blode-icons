import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const InfinityIcon = (
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
      d="m12 12 3.2218 3.182c1.7794 1.7573 4.6643 1.7573 6.4437 0s1.7793-4.6066 0-6.364-4.6643-1.7573-6.4437 0zm0 0L8.7782 8.818c-1.7794-1.7573-4.6643-1.7573-6.4437 0s-1.7793 4.6066 0 6.364 4.6643 1.7573 6.4437 0z"
      stroke="currentColor"
      strokeLinecap="square"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(InfinityIcon);
export default ForwardRef;
