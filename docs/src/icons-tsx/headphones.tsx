import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const HeadphonesIcon = (
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
      d="M4 14v-2c0-4.4183 3.5817-8 8-8s8 3.5817 8 8v2M4 14v4c0 1.1046.8954 2 2 2s2-.8954 2-2v-1c0-1.6569-1.3431-3-3-3zm16 0v4c0 1.1046-.8954 2-2 2s-2-.8954-2-2v-1c0-1.6569 1.3431-3 3-3z"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(HeadphonesIcon);
export default ForwardRef;
