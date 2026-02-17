import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ArrowFromLineDownIcon = (
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
      d="M16.25 15.75 12 20l-4.25-4.25M19 4H5M12 8v11"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowFromLineDownIcon);
export default ForwardRef;
