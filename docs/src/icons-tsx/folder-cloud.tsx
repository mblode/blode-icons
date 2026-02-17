import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const FolderCloudIcon = (
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
      d="M3 10V7c0-1.6569 1.3431-3 3-3h2.9296c.6687 0 1.2932.3342 1.6641.8906l.8126 1.2188A2 2 0 0 0 13.0704 7H18c1.6569 0 3 1.3431 3 3v6c0 1.6569-1.3431 3-3 3h-4"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
      d="M2 16.75C2 18.5449 3.455 20 5.25 20H8c1.3807 0 2.5-1.1193 2.5-2.5S9.3807 15 8 15h-.0112c-.5772-.9017-1.5873-1.5-2.7388-1.5C3.455 13.5 2 14.9551 2 16.75Z"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(FolderCloudIcon);
export default ForwardRef;
