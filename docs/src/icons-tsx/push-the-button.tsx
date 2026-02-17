import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const PushTheButtonIcon = (
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
      d="M19 7c0 1.1046-3.134 2-7 2s-7-.8954-7-2m14 0c0-1.1046-3.134-2-7-2s-7 .8954-7 2m14 0v7c0 1.1046-3.134 2-7 2s-7-.8954-7-2V7m0 7.1067c-1.8514.5186-3 1.2412-3 2.0404 0 1.578 4.4772 2.8572 10 2.8572s10-1.2792 10-2.8572c0-.7992-1.1486-1.5218-3-2.0404"
      stroke="currentColor"
      strokeLinecap="square"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(PushTheButtonIcon);
export default ForwardRef;
