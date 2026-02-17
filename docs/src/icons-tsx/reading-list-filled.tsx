import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ReadingListFilledIcon = (
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
      d="M6 7c-1.637 0-3.0891.787-4.0002 2H1c-.5523 0-1 .4477-1 1s.4477 1 1 1h.1002A5 5 0 0 0 1 12c0 2.7614 2.2386 5 5 5s5-2.2386 5-5a4.99 4.99 0 0 0-.2987-1.7054A2.99 2.99 0 0 1 12 10c.4658 0 .906.1057 1.2987.2946A4.99 4.99 0 0 0 13 12c0 2.7614 2.2386 5 5 5s5-2.2386 5-5c0-.3421-.0345-.6766-.1002-1H23c.5523 0 1-.4477 1-1s-.4477-1-1-1h-.9998C21.0891 7.787 19.6369 7 18 7c-1.4417 0-2.7402.6106-3.6518 1.5848A4.98 4.98 0 0 0 12 8c-.848 0-1.6478.2117-2.3482.5848C8.7402 7.6106 7.4417 7 6 7"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(ReadingListFilledIcon);
export default ForwardRef;
