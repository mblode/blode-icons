import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Note1FilledIcon = (
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
      d="M3 7c0-2.2091 1.7909-4 4-4h10c2.2091 0 4 1.7909 4 4v7h-3c-2.2091 0-4 1.7909-4 4v3H7c-2.2091 0-4-1.7909-4-4z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
    <path
      d="M16 20.8021a4 4 0 0 0 1.5858-.9737l2.2426-2.2426A4 4 0 0 0 20.8021 16H18c-1.1046 0-2 .8954-2 2z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(Note1FilledIcon);
export default ForwardRef;
