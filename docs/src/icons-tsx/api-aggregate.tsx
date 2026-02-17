import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ApiAggregateIcon = (
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
      d="M15.5 6.75c0 1.933-1.567 3.5-3.5 3.5s-3.5-1.567-3.5-3.5 1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5ZM10 16.25c0 1.933-1.567 3.5-3.5 3.5S3 18.183 3 16.25s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5ZM21 16.25c0 1.933-1.567 3.5-3.5 3.5s-3.5-1.567-3.5-3.5 1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5Z"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(ApiAggregateIcon);
export default ForwardRef;
