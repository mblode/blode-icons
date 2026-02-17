import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const CmdIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M9 9V6.5C9 5.1193 7.8807 4 6.5 4S4 5.1193 4 6.5 5.1193 9 6.5 9zm0 0h6M9 9v6m6-6V6.5C15 5.1193 16.1193 4 17.5 4S20 5.1193 20 6.5 18.8807 9 17.5 9zm0 0v6m0 0H9m6 0v2.5c0 1.3807 1.1193 2.5 2.5 2.5s2.5-1.1193 2.5-2.5-1.1193-2.5-2.5-2.5zm-6 0v2.5C9 18.8807 7.8807 20 6.5 20S4 18.8807 4 17.5 5.1193 15 6.5 15z"
      stroke="currentColor"
      strokeLinecap="square"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(CmdIcon);
export default ForwardRef;
