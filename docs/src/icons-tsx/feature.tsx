import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const FeatureIcon = (
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
      d="M12 2v6m0 8v6M8 12H2m14 0h6M7.5 7.5 6 6m10.5 1.5L18 6m-1.5 10.5L18 18M7.5 16.5 6 18"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(FeatureIcon);
export default ForwardRef;
