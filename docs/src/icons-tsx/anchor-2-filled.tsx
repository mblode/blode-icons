import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Anchor2FilledIcon = (
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
      d="M13 8.855c1.4457-.4302 2.5-1.7695 2.5-3.355C15.5 3.567 13.933 2 12 2S8.5 3.567 8.5 5.5c0 1.5855 1.0543 2.9248 2.5 3.355v11.1286C7.2563 19.7372 4.2628 16.7438 4.0164 13H6c.5523 0 1-.4477 1-1s-.4477-1-1-1H3c-.5523 0-1 .4477-1 1v.5c0 5.2467 4.2533 9.5 9.5 9.5h1c5.2467 0 9.5-4.2533 9.5-9.5V12c0-.5523-.4477-1-1-1h-3c-.5523 0-1 .4477-1 1s.4477 1 1 1h1.9836c-.2464 3.7438-3.2398 6.7372-6.9836 6.9836zM10.5 5.5c0-.8284.6716-1.5 1.5-1.5s1.5.6716 1.5 1.5S12.8284 7 12 7s-1.5-.6716-1.5-1.5"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(Anchor2FilledIcon);
export default ForwardRef;
