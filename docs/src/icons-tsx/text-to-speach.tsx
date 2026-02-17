import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const TextToSpeachIcon = (
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
      d="M10.5039 15v2m3.5-9v12m3.5-9v6m3.5-4v2M3.004 5.7778V4h4m3.9999 1.7778V4h-4m0 0v8m0 0H5.6706m1.3333 0h1.3333"
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
const ForwardRef = forwardRef(TextToSpeachIcon);
export default ForwardRef;
