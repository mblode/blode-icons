import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const FocusMacroFilledIcon = (
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
      d="M7 5c-1.1046 0-2 .8954-2 2v1c0 .5523-.4477 1-1 1s-1-.4477-1-1V7c0-2.2091 1.7909-4 4-4h1c.5523 0 1 .4477 1 1s-.4477 1-1 1zM15 4c0-.5523.4477-1 1-1h1c2.2091 0 4 1.7909 4 4v1c0 .5523-.4477 1-1 1s-1-.4477-1-1V7c0-1.1046-.8954-2-2-2h-1c-.5523 0-1-.4477-1-1M4 15c.5523 0 1 .4477 1 1v1c0 1.1046.8954 2 2 2h1c.5523 0 1 .4477 1 1s-.4477 1-1 1H7c-2.2091 0-4-1.7909-4-4v-1c0-.5523.4477-1 1-1M20 15c.5523 0 1 .4477 1 1v1c0 2.2091-1.7909 4-4 4h-1c-.5523 0-1-.4477-1-1s.4477-1 1-1h1c1.1046 0 2-.8954 2-2v-1c0-.5523.4477-1 1-1M13 14.6152c1.5856-.4376 2.75-1.8904 2.75-3.6152V8.75a.75.75 0 0 0-1.0454-.6894l-1.2833.55-.891-.891a.75.75 0 0 0-1.0606 0l-.891.891-1.2833-.55A.75.75 0 0 0 8.25 8.75V11c0 1.7248 1.1644 3.1776 2.75 3.6152V16c0 .5523.4477 1 1 1s1-.4477 1-1z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(FocusMacroFilledIcon);
export default ForwardRef;
