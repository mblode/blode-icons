import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const VoiceRecordFilledIcon = (
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
      d="M7.504 4c0-.5523-.4478-1-1-1-.5524 0-1 .4477-1 1v12c0 .5523.4476 1 1 1 .5522 0 1-.4477 1-1zM14.5039 5c0-.5523-.4477-1-1-1s-1 .4477-1 1v2.5c0 .5523.4477 1 1 1s1-.4477 1-1zM11.0039 7c0-.5523-.4477-1-1-1s-1 .4477-1 1v3c0 .5523.4477 1 1 1s1-.4477 1-1zM4.004 9c0-.5523-.4478-1-1-1-.5524 0-1 .4477-1 1v2c0 .5523.4476 1 1 1 .5522 0 1-.4477 1-1zM19.0017 15.5c0 1.3807-1.1193 2.5-2.5 2.5s-2.5-1.1193-2.5-2.5 1.1193-2.5 2.5-2.5 2.5 1.1193 2.5 2.5"
      fill="currentColor"
    />
    <path
      clipRule="evenodd"
      d="M11.0017 15.5c0-3.0376 2.4624-5.5 5.5-5.5s5.5 2.4624 5.5 5.5-2.4624 5.5-5.5 5.5-5.5-2.4624-5.5-5.5m5.5-3.5c-1.933 0-3.5 1.567-3.5 3.5s1.567 3.5 3.5 3.5 3.5-1.567 3.5-3.5-1.567-3.5-3.5-3.5"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(VoiceRecordFilledIcon);
export default ForwardRef;
