import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const FramerFilledIcon = (
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
      d="M18.6693 2v6.6667h-6.6667L5.336 2zM5.336 8.6667h6.6666l6.6667 6.6666h-6.6667V22l-6.6667-6.6667z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(FramerFilledIcon);
export default ForwardRef;
