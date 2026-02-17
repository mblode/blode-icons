import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const TrashCan2Icon = (
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
      d="M6 6v12c0 1.6569 1.3431 3 3 3h6c1.6569 0 3-1.3431 3-3V6M6 6h12M6 6H4m14 0h2M9 6c0-1.6569 1.3431-3 3-3s3 1.3431 3 3m-1 5v5m-4-5v5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(TrashCan2Icon);
export default ForwardRef;
