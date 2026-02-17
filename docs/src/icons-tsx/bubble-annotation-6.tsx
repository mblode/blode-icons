import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const BubbleAnnotation6Icon = (
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
      d="M3 9c0-2.7614 2.2386-5 5-5h8c2.7614 0 5 2.2386 5 5v6c0 2.7614-2.2386 5-5 5H3z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
      d="M7.125 12a.875.875 0 1 0 1.75 0 .875.875 0 0 0-1.75 0Zm4 0a.875.875 0 1 0 1.7501-.0001A.875.875 0 0 0 11.125 12Zm4 0a.875.875 0 1 0 1.7501-.0001A.875.875 0 0 0 15.125 12Z"
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="square"
      strokeWidth={0.75}
      style={{
        fill: "currentColor",
        fillOpacity: 1,
        stroke: "currentColor",
        strokeOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(BubbleAnnotation6Icon);
export default ForwardRef;
