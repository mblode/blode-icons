import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const CircleDotsCenter2FilledIcon = (
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
      d="M12 2c5.5228 0 10 4.4772 10 10s-4.4772 10-10 10S2 17.5228 2 12 6.4772 2 12 2m-1.25 6c0 .6904.5596 1.25 1.25 1.25s1.25-.5596 1.25-1.25-.5596-1.25-1.25-1.25-1.25.5596-1.25 1.25m0 4c0 .6904.5596 1.25 1.25 1.25s1.25-.5596 1.25-1.25-.5596-1.25-1.25-1.25-1.25.5596-1.25 1.25M12 17.25c-.6904 0-1.25-.5596-1.25-1.25s.5596-1.25 1.25-1.25 1.25.5596 1.25 1.25-.5596 1.25-1.25 1.25"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(CircleDotsCenter2FilledIcon);
export default ForwardRef;
