import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const SubstackIcon = (
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
      clipRule="evenodd"
      d="M4 3h16v2.2102H4zm0 8.062h16V21l-8.0016-4.4224L4 21zm0-4.031h16v2.2102H4z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SubstackIcon);
export default ForwardRef;
