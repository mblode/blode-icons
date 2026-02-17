import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const FilterDescendingIcon = (
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
      d="M7 4v16m0 0-3-3m3 3 3-3m5 3 .5-1.5m0 0 1.1924-3.9023a.8445.8445 0 0 1 1.6152 0L19.5 18.5m-4 0h4m0 0L20 20M15 4h5l-5 6h5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(FilterDescendingIcon);
export default ForwardRef;
