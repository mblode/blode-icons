import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const PauseFilledIcon = (
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
      d="M4 6c0-1.6569 1.3431-3 3-3s3 1.3431 3 3v12c0 1.6569-1.3431 3-3 3s-3-1.3431-3-3zM14 6c0-1.6569 1.3431-3 3-3s3 1.3431 3 3v12c0 1.6569-1.3431 3-3 3s-3-1.3431-3-3z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(PauseFilledIcon);
export default ForwardRef;
