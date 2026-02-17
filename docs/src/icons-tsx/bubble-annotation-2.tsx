import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const BubbleAnnotation2Icon = (
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
      d="M6.002 4h12c1.6568 0 3 1.3431 3 3v8c0 1.6569-1.3432 3-3 3h-6l-5 3v-3h-1c-1.6569 0-3-1.3431-3-3V7c0-1.6569 1.3431-3 3-3Z"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
      d="M6.625 11a.875.875 0 1 0 1.75 0 .875.875 0 0 0-1.75 0Zm4.5 0a.875.875 0 1 0 1.7501-.0001A.875.875 0 0 0 11.125 11Zm4.5 0a.875.875 0 1 0 1.7501-.0001A.875.875 0 0 0 15.625 11Z"
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
const ForwardRef = forwardRef(BubbleAnnotation2Icon);
export default ForwardRef;
