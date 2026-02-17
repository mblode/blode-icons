import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const DotSmallIcon = (
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
    <circle cx={12} cy={12} fill="currentColor" r={1} />
  </svg>
);
const ForwardRef = forwardRef(DotSmallIcon);
export default ForwardRef;
