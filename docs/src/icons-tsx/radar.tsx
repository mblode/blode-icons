import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const RadarIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M7.5 4.5 12 12l4.5-7.5m-1.9271 3.212C16.0271 8.5862 17 10.1795 17 12c0 2.7614-2.2386 5-5 5s-5-2.2386-5-5c0-1.8204.973-3.4137 2.4271-4.288M12 21c-4.9706 0-9-4.0294-9-9s4.0294-9 9-9 9 4.0294 9 9-4.0294 9-9 9Zm0-8c-.5523 0-1-.4477-1-1s.4477-1 1-1 1 .4477 1 1-.4477 1-1 1Z"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(RadarIcon);
export default ForwardRef;
