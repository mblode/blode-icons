import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const CropIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M3 6h12c1.6569 0 3 1.3431 3 3v12M6 3v12c0 1.6569 1.3431 3 3 3h12"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(CropIcon);
export default ForwardRef;
