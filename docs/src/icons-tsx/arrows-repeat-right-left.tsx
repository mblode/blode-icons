import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ArrowsRepeatRightLeftIcon = (
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
      d="m17.4998 3 2.2929 2.2929c.3906.3905.3906 1.0237 0 1.4142L17.4998 9m-11 12L4.207 18.7071c-.3906-.3905-.3906-1.0237 0-1.4142L6.4999 15m-1.5 3h11.9999c1.6569 0 3-1.3431 3-3v-2m-16-2V9c0-1.6569 1.3432-3 3-3h12"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowsRepeatRightLeftIcon);
export default ForwardRef;
