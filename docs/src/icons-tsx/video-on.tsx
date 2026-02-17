import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const VideoOnIcon = (
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
      d="M6 5h7c1.6569 0 3 1.3431 3 3v1l3.5528-1.7764C20.2177 6.8912 21 7.3746 21 8.118v7.764c0 .7433-.7823 1.2268-1.4472.8944L16 15v1c0 1.6569-1.3431 3-3 3H6c-1.6569 0-3-1.3431-3-3V8c0-1.6569 1.3431-3 3-3Z"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
      d="M12 12c0 1.3807-1.1193 2.5-2.5 2.5S7 13.3807 7 12s1.1193-2.5 2.5-2.5S12 10.6193 12 12Z"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(VideoOnIcon);
export default ForwardRef;
