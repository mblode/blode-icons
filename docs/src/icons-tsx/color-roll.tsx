import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ColorRollIcon = (
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
      d="M7 7v1c0 1.1046.8954 2 2 2h9c1.1046 0 2-.8954 2-2V6c0-1.1046-.8954-2-2-2H9c-1.1046 0-2 .8954-2 2zm0 0H5c-.5523 0-1 .4477-1 1v2c0 1.6569 1.3431 3 3 3h6v2.5m2 5.5v-3c0-1.1046-.8954-2-2-2s-2 .8954-2 2v3"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(ColorRollIcon);
export default ForwardRef;
