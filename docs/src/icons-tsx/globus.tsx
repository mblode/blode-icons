import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const GlobusIcon = (
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
      d="M21 12c0 4.9706-4.0294 9-9 9m9-9c0-4.9706-4.0294-9-9-9m9 9H3m9 9c-4.9706 0-9-4.0294-9-9m9 9c-2.2091 0-4-4.0294-4-9s1.7909-9 4-9m0 18c2.2091 0 4-4.0294 4-9s-1.7909-9-4-9m-9 9c0-4.9706 4.0294-9 9-9"
      stroke="currentColor"
      strokeLinecap="square"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(GlobusIcon);
export default ForwardRef;
