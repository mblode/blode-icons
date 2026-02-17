import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const VercelFilledIcon = (
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
    <path d="m11.8632 2.18 10.8632 18.8158H1z" fill="currentColor" />
  </svg>
);
const ForwardRef = forwardRef(VercelFilledIcon);
export default ForwardRef;
