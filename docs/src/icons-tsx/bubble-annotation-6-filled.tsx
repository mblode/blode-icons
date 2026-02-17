import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const BubbleAnnotation6FilledIcon = (
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
      d="M2 9c0-3.3137 2.6863-6 6-6h8c3.3137 0 6 2.6863 6 6v6c0 3.3137-2.6863 6-6 6H3c-.5523 0-1-.4477-1-1zm6 4.25c-.6904 0-1.25-.5596-1.25-1.25s.5596-1.25 1.25-1.25 1.25.5596 1.25 1.25-.5596 1.25-1.25 1.25m4 0c-.6904 0-1.25-.5596-1.25-1.25s.5596-1.25 1.25-1.25 1.25.5596 1.25 1.25-.5596 1.25-1.25 1.25M14.75 12c0 .6904.5596 1.25 1.25 1.25s1.25-.5596 1.25-1.25-.5596-1.25-1.25-1.25-1.25.5596-1.25 1.25"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(BubbleAnnotation6FilledIcon);
export default ForwardRef;
