import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Anchor1Icon = (
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
      d="M12 8c1.3807 0 2.5-1.1193 2.5-2.5S13.3807 3 12 3 9.5 4.1193 9.5 5.5 10.6193 8 12 8m0 0v13m6-9h3l-2.1012 6.8767A3 3 0 0 1 16.0297 21H12m-6-9H3l2.1012 6.8767A3 3 0 0 0 7.9702 21H12"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(Anchor1Icon);
export default ForwardRef;
