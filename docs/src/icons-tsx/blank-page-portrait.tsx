import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const BlankPagePortraitIcon = (
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
      d="M7 21h5.1429a7.714 7.714 0 0 0 6.1714-3.0857A3.43 3.43 0 0 0 19 15.8571V6c0-1.6569-1.3431-3-3-3H8C6.3431 3 5 4.3431 5 6v13c0 1.1046.8954 2 2 2m0 0c2.6522 0 4.0536-1.0536 5.9289-2.9289L14 17c1.5 1 5 1 5-1.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(BlankPagePortraitIcon);
export default ForwardRef;
