import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ThreadFilledIcon = (
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
      d="M13.937 3H19c.5523 0 1 .4477 1 1s-.4477 1-1 1v4.6529L5 7.3195V5c-.5523 0-1-.4477-1-1s.4477-1 1-1h5.063c.222-.8626 1.0051-1.5 1.937-1.5s1.715.6374 1.937 1.5M10.063 21H5c-.5523 0-1-.4477-1-1s.4477-1 1-1v-4.6529l14 2.3334V19c.5523 0 1 .4477 1 1s-.4477 1-1 1h-5.063c-.222.8626-1.0051 1.5-1.937 1.5s-1.715-.6374-1.937-1.5M5 12.3195V9.3471l14 2.3334v2.9724z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(ThreadFilledIcon);
export default ForwardRef;
