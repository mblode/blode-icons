import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const SpeachToTextFilledIcon = (
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
      d="M6.504 3c.5522 0 1 .4477 1 1v12c0 .5523-.4478 1-1 1-.5524 0-1-.4477-1-1V4c0-.5523.4476-1 1-1m6.9999 1c.5523 0 1 .4477 1 1v3.5c0 .5523-.4477 1-1 1s-1-.4477-1-1V5c0-.5523.4477-1 1-1m-3.5 2c.5523 0 1 .4477 1 1v6c0 .5523-.4477 1-1 1s-1-.4477-1-1V7c0-.5523.4477-1 1-1m-7 2c.5523 0 1 .4477 1 1v2c0 .5523-.4477 1-1 1s-1-.4477-1-1V9c0-.5523.4477-1 1-1m9.5 4c0-.5523.4477-1 1-1h8c.5523 0 1 .4477 1 1v1.5556c0 .5522-.4477 1-1 1s-1-.4478-1-1V13h-2v6h.5c.5523 0 1 .4477 1 1s-.4477 1-1 1h-3c-.5523 0-1-.4477-1-1s.4477-1 1-1h.5v-6h-2v.5556c0 .5522-.4477 1-1 1s-1-.4478-1-1z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SpeachToTextFilledIcon);
export default ForwardRef;
