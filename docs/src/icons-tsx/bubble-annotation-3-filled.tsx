import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const BubbleAnnotation3FilledIcon = (
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
      d="M2 12C2 6.4772 6.4772 2 12 2s10 4.4772 10 10-4.4772 10-10 10c-1.44 0-2.8115-.305-4.0512-.8549-.027-.012-.0423-.0107-.0446-.0105l-2.687.7877c-1.9148.5613-3.6832-1.2367-3.0902-3.142l.796-2.5575s.0002-.0032-.0001-.0071a.12.12 0 0 0-.0113-.0392C2.326 14.9043 2 13.4889 2 12m4.25 0c0 .6904.5596 1.25 1.25 1.25s1.25-.5596 1.25-1.25-.5596-1.25-1.25-1.25-1.25.5596-1.25 1.25m4.5 0c0 .6904.5596 1.25 1.25 1.25s1.25-.5596 1.25-1.25-.5596-1.25-1.25-1.25-1.25.5596-1.25 1.25m5.75 1.25c-.6904 0-1.25-.5596-1.25-1.25s.5596-1.25 1.25-1.25 1.25.5596 1.25 1.25-.5596 1.25-1.25 1.25"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(BubbleAnnotation3FilledIcon);
export default ForwardRef;
