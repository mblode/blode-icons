import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Email2FilledIcon = (
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
      d="M2.1389 6.9514C2.5996 5.2509 4.1537 4 6 4h12c1.8463 0 3.4004 1.2509 3.8611 2.9514l-8.9667 4.4834a2 2 0 0 1-1.7888 0z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
    <path
      d="M2 9.118V16c0 2.2091 1.7909 4 4 4h12c2.2091 0 4-1.7909 4-4V9.118l-8.2112 4.1056a4 4 0 0 1-3.5777 0z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(Email2FilledIcon);
export default ForwardRef;
