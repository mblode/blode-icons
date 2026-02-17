import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const AppleNewtonIcon = (
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
      d="M6.542 3c-.6302 2.0005-.232 3.6199 1.0882 5.2758m0 0c-12.067 4.8723 5.7652 19.001 9.6372 9.5273 3.1866-1.2726 3.7324-4.072 2.8602-6.8031M7.6302 8.2758C8.2797 6.7032 9.092 5.6444 9.991 5"
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
      d="M15 4v6"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
      style={{
        stroke: "currentColor",
        strokeOpacity: 1,
      }}
    />
    <path
      d="M12.5 8.5 15 11l2.5-2.5"
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
const ForwardRef = forwardRef(AppleNewtonIcon);
export default ForwardRef;
