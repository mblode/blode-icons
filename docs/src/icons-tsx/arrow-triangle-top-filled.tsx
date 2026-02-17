import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ArrowTriangleTopFilledIcon = (
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
      d="M4.3185 15.6642C3.3231 17.6558 4.7705 20 6.9977 20h10.0042c2.2272 0 3.6745-2.3442 2.6792-4.3358l-5.0022-10.008c-1.1038-2.2083-4.2545-2.2083-5.3582 0z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowTriangleTopFilledIcon);
export default ForwardRef;
