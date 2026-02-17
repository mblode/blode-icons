import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Note1Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M15 20v-2c0-1.6569 1.3431-3 3-3h2m0-.2426V7c0-1.6569-1.3431-3-3-3H7C5.3431 4 4 5.3431 4 7v10c0 1.6569 1.3431 3 3 3h7.7574a3 3 0 0 0 2.1213-.8787l2.2426-2.2426A3 3 0 0 0 20 14.7574"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(Note1Icon);
export default ForwardRef;
