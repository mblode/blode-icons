import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ShareAndroidIcon = (
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
      d="M14.3354 7.3798C14.8349 8.3423 15.8406 9 17 9c1.6569 0 3-1.3431 3-3s-1.3431-3-3-3-3 1.3431-3 3c0 .4975.1211.9667.3354 1.3798Zm0 0-5.6708 3.2404m0 0C8.165 9.6576 7.1594 9 6 9c-1.6569 0-3 1.3431-3 3s1.3431 3 3 3c1.1594 0 2.1651-.6576 2.6646-1.6202m0-2.7596C8.8789 11.0333 9 11.5025 9 12s-.1211.9667-.3354 1.3798m0 0 5.6708 3.2404m0 0A2.99 2.99 0 0 0 14 18c0 1.6569 1.3431 3 3 3s3-1.3431 3-3-1.3431-3-3-3c-1.1594 0-2.1651.6576-2.6646 1.6202Z"
      stroke="currentColor"
      strokeWidth={2}
      style={{
        stroke: "currentColor",
        strokeOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(ShareAndroidIcon);
export default ForwardRef;
