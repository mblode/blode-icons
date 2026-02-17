import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const VideoPlayIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    fill="none"
    ref={ref}
    viewBox="0 0 56 56"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m35.376 28.4158-10.5986 7.0658a.5.5 0 0 1-.7774-.416V20.9341a.5.5 0 0 1 .7774-.416l10.5986 7.0657a.5.5 0 0 1 0 .832"
      fill="#fff"
    />
  </svg>
);
const ForwardRef = forwardRef(VideoPlayIcon);
export default ForwardRef;
