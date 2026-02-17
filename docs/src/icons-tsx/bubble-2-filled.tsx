import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Bubble2FilledIcon = (
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
      d="M18.002 3c2.2091 0 4 1.7909 4 4v8c0 2.2091-1.7909 4-4 4h-5.7231l-4.7624 2.8575A1 1 0 0 1 6.002 21v-2c-2.2092 0-4-1.7909-4-4V7c0-2.2091 1.7908-4 4-4z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(Bubble2FilledIcon);
export default ForwardRef;
