import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const FolderDeleteIcon = (
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
      d="M3 11V7c0-1.6569 1.3431-3 3-3h2.9296c.6687 0 1.2932.3342 1.6641.8906l.8126 1.2188A2 2 0 0 0 13.0704 7H18c1.6569 0 3 1.3431 3 3v6c0 1.6569-1.3431 3-3 3h-7m-4-4-2 2m0 0-2 2m2-2-2-2m2 2 2 2"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(FolderDeleteIcon);
export default ForwardRef;
