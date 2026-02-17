import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const InitiativesIcon = (
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
      d="M3.5 14.9655C3.176 14.0369 3 13.039 3 12c0-4.9706 4.0294-9 9-9s9 4.0294 9 9c0 1.039-.1761 2.0369-.5 2.9655"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      style={{
        stroke: "currentColor",
        strokeOpacity: 1,
      }}
    />
    <path
      d="m6.958 18.5026 4.1689-7.4446c.3819-.6818 1.3632-.6818 1.7451 0l4.1689 7.4446c.5089.9088-.5371 1.893-1.4132 1.3298l-3.0875-1.9848a1 1 0 0 0-1.0815 0l-3.0875 1.9848c-.8761.5632-1.9222-.421-1.4132-1.3298"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      style={{
        stroke: "currentColor",
        strokeOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(InitiativesIcon);
export default ForwardRef;
