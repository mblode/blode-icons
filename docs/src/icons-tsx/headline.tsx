import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const HeadlineIcon = (
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
      d="M6 4H4m2 0h2M6 4v8m0 8h2m-2 0H4m2 0v-8m12-8h-2m2 0h2m-2 0v8m0 8h-2m2 0h2m-2 0v-8m0 0H6"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(HeadlineIcon);
export default ForwardRef;
