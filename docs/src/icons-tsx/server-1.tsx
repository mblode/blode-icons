import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Server1Icon = (
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
      d="M19 5.5C19 6.8807 15.866 8 12 8S5 6.8807 5 5.5m14 0C19 4.1193 15.866 3 12 3S5 4.1193 5 5.5m14 0v13c0 1.3807-3.134 2.5-7 2.5s-7-1.1193-7-2.5v-13M19 12c0 1.3807-3.134 2.5-7 2.5S5 13.3807 5 12"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(Server1Icon);
export default ForwardRef;
