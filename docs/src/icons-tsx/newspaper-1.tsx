import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Newspaper1Icon = (
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
      d="M12 6.2501 6.6508 5.0614C4.7773 4.6451 3 6.0707 3 7.99v7.8536c0 1.4061.9766 2.6236 2.3492 2.9286L12 20.2501m0-14 5.3492-1.1887C19.2227 4.6451 21 6.0707 21 7.99v7.8536c0 1.4061-.9766 2.6236-2.3492 2.9286L12 20.2501m0-14v14"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(Newspaper1Icon);
export default ForwardRef;
