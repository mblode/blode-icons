import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const VideoOffIcon = (
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
      d="m2 3 14.5 18.5M9 5h3c1.6569 0 3 1.3431 3 3v4m0 0v-2l4.5528-2.2764C20.2177 7.3912 21 7.8746 21 8.618v6.764c0 .7433-.7823 1.2268-1.4472.8944L15 14zM4.0663 5.7062C3.4143 6.2565 3 7.08 3 8v8c0 1.6569 1.3431 3 3 3h6c.741 0 1.4193-.2687 1.9428-.7139"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(VideoOffIcon);
export default ForwardRef;
