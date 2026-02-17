import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const AsteriskIcon = (
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
      d="M11.998 3v18M4.2038 7.5l15.5885 9m-15.5892 0 15.5885-9"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(AsteriskIcon);
export default ForwardRef;
