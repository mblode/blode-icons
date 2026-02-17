import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Plugin2FilledIcon = (
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
      d="M4 5.5C4 4.1193 5.1193 3 6.5 3h2C9.8807 3 11 4.1193 11 5.5V6H4zM13 5.5C13 4.1193 14.1193 3 15.5 3h2C18.8807 3 20 4.1193 20 5.5V6h-7zM2 11c0-1.6569 1.3432-3 3-3h14c1.6569 0 3 1.3431 3 3v6c0 1.6569-1.3431 3-3 3H5c-1.6568 0-3-1.3431-3-3z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(Plugin2FilledIcon);
export default ForwardRef;
