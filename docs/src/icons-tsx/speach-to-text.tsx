import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const SpeachToTextIcon = (
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
      d="M13.5039 13.5556V12h4m4 1.5556V12h-4m0 0v8m0 0h-1.5m1.5 0h1.5M3.004 9v2m3.5-7v12m3.4999-9v6m3.5-8v3.5"
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
const ForwardRef = forwardRef(SpeachToTextIcon);
export default ForwardRef;
