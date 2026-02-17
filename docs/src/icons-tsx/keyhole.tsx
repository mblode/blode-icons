import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const KeyholeIcon = (
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
      d="M21 12c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9Z"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
      d="M13.75 12.437C14.507 11.8924 15 11.0038 15 10c0-1.6569-1.3431-3-3-3s-3 1.3431-3 3c0 1.0038.493 1.8924 1.25 2.437v2.813c0 .9665.7835 1.75 1.75 1.75s1.75-.7835 1.75-1.75z"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(KeyholeIcon);
export default ForwardRef;
