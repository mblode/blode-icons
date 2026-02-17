import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const FileArrowLeft2Icon = (
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
      d="M19 12v-1.7574a3 3 0 0 0-.8787-2.1213l-4.2426-4.2426A3 3 0 0 0 11.7574 3H8C6.3431 3 5 4.3431 5 6v12c0 1.6569 1.3431 3 3 3"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
      d="M13 4v3c0 1.1046.8954 2 2 2h3M14 19h6M16 22l-3-3 3-3"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(FileArrowLeft2Icon);
export default ForwardRef;
