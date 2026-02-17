import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Trending5Icon = (
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
      d="M19 11c-1.1046-1.1046-2.8954-1.1046-4 0l-1.75 1.75c-.6904.6904-1.8096.6904-2.5 0v0c-.6904-.6904-1.8096-.6904-2.5 0L4 17M4 4v13m16 3H7c-1.6569 0-3-1.3431-3-3v0"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(Trending5Icon);
export default ForwardRef;
