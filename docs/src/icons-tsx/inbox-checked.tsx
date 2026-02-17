import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const InboxCheckedIcon = (
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
      d="M7.5 10.4259 10.9483 14.5 17.5 4.5M4 15v.2c0 1.6802 0 2.5202.327 3.162a3 3 0 0 0 1.311 1.311C6.2798 20 7.1198 20 8.8 20h6.4c1.6802 0 2.5202 0 3.162-.327a3 3 0 0 0 1.311-1.311C20 17.7202 20 16.8802 20 15.2V15"
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
const ForwardRef = forwardRef(InboxCheckedIcon);
export default ForwardRef;
