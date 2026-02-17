import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const RewindFilledIcon = (
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
      d="M20.0009 16.7966c0 1.7183-2.0238 2.6366-3.317 1.5051l-4.683-4.0976v2.5925c0 1.7183-2.0238 2.6366-3.317 1.5051l-5.4814-4.7962c-.9106-.7969-.9106-2.2135 0-3.0103L8.684 5.6989c1.2932-1.1315 3.317-.2131 3.317 1.5052v2.5924l4.683-4.0976c1.2932-1.1315 3.317-.2131 3.317 1.5052z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(RewindFilledIcon);
export default ForwardRef;
