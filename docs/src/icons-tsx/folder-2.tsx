import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Folder2Icon = (
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
      d="M21 13c0-1.6569-1.3431-3-3-3H6c-1.6569 0-3 1.3431-3 3m3-9h2.7574a3 3 0 0 1 2.1213.8787l.2426.2426A3 3 0 0 0 13.2426 6H18c1.6569 0 3 1.3431 3 3v7c0 1.6569-1.3431 3-3 3H6c-1.6569 0-3-1.3431-3-3V7c0-1.6569 1.3431-3 3-3"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(Folder2Icon);
export default ForwardRef;
