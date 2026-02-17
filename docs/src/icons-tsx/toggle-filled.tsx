import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ToggleFilledIcon = (
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
      clipRule="evenodd"
      d="M23.5 12c0 4.4183-3.5817 8-8 8h-7c-4.4183 0-8-3.5817-8-8s3.5817-8 8-8h7c4.4183 0 8 3.5817 8 8m-8 3c1.6569 0 3-1.3431 3-3s-1.3431-3-3-3-3 1.3431-3 3 1.3431 3 3 3"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(ToggleFilledIcon);
export default ForwardRef;
