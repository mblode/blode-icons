import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ZoomOutFilledIcon = (
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
      d="M11 3c-4.4183 0-8 3.5817-8 8s3.5817 8 8 8c1.8487 0 3.551-.6271 4.9056-1.6801l3.3871 3.387c.3905.3905 1.0237.3905 1.4142 0s.3905-1.0237 0-1.4142l-3.387-3.3871C18.3729 14.551 19 12.8487 19 11c0-4.4183-3.5817-8-8-8m4 8c0 .5523-.4477 1-1 1H8c-.5523 0-1-.4477-1-1s.4477-1 1-1h6c.5523 0 1 .4477 1 1"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(ZoomOutFilledIcon);
export default ForwardRef;
