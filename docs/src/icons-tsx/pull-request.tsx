import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const PullRequestIcon = (
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
      d="M6.5 8C7.8807 8 9 6.8807 9 5.5S7.8807 3 6.5 3 4 4.1193 4 5.5 5.1193 8 6.5 8m0 0v8m0 0C5.1193 16 4 17.1193 4 18.5S5.1193 21 6.5 21 9 19.8807 9 18.5 7.8807 16 6.5 16m11 0c-1.3807 0-2.5 1.1193-2.5 2.5s1.1193 2.5 2.5 2.5 2.5-1.1193 2.5-2.5-1.1193-2.5-2.5-2.5m0 0V8.5c0-1.6569-1.3431-3-3-3H12m0 0L14.5 3M12 5.5 14.5 8"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(PullRequestIcon);
export default ForwardRef;
