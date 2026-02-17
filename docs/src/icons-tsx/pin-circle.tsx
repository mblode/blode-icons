import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const PinCircleIcon = (
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
      d="M12 12v5m1.7676-9.2679c.9765.9767.9765 2.5601 0 3.5358s-2.5599.9766-3.5355 0-.9766-2.5601 0-3.5358 2.5589-.9766 3.5355 0M12 21c-4.9706 0-9-4.0294-9-9s4.0294-9 9-9 9 4.0294 9 9-4.0294 9-9 9"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(PinCircleIcon);
export default ForwardRef;
