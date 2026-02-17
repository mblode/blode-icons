import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const UsbCIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M6 12h12M6 17h12c2.7614 0 5-2.2386 5-5s-2.2386-5-5-5H6c-2.7614 0-5 2.2386-5 5s2.2386 5 5 5Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(UsbCIcon);
export default ForwardRef;
