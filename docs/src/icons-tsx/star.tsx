import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const StarIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M10.9907 2.6304c.4051-.8405 1.6135-.8405 2.0186 0l2.0151 4.1812c.163.3383.4878.572.8631.621l4.639.6054c.9326.1217 1.306 1.2596.6238 1.9008l-3.3936 3.1896a1.101 1.101 0 0 0-.3297 1.0047l.852 4.5554c.1713.9158-.8064 1.619-1.6331 1.1748l-4.1124-2.21a1.128 1.128 0 0 0-1.067 0l-4.1124 2.21c-.8267.4442-1.8044-.259-1.633-1.1748l.8519-4.5554a1.1 1.1 0 0 0-.3297-1.0047L2.8497 9.9388c-.6822-.6412-.3088-1.779.6238-1.9008l4.639-.6055c.3753-.049.7-.2826.8631-.6209z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(StarIcon);
export default ForwardRef;
