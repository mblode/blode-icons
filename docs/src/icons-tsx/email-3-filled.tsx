import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Email3FilledIcon = (
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
      d="M21.8582 6.9406C21.3939 5.2456 19.8424 4 18 4H6C4.1576 4 2.6062 5.2456 2.1418 6.9406 4.672 9.45 8.155 11 12 11s7.328-1.55 9.8582-4.0594"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
    <path
      d="M22 9.4907C19.2608 11.6866 15.7838 13 12 13S4.7392 11.6866 2 9.4907V16c0 2.2091 1.7909 4 4 4h12c2.2091 0 4-1.7909 4-4z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(Email3FilledIcon);
export default ForwardRef;
