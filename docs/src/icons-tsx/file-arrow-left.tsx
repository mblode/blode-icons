import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const FileArrowLeftIcon = (
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
      d="M16 21c1.6569 0 3-1.3431 3-3v-7.7574a3 3 0 0 0-.8787-2.1213l-4.2426-4.2426A3 3 0 0 0 11.7574 3H8C6.3431 3 5 4.3431 5 6v6"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
      d="M13 4v3c0 1.1046.8954 2 2 2h3M5 19h6M7 22l-3-3 3-3"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(FileArrowLeftIcon);
export default ForwardRef;
