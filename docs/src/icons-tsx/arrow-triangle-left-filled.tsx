import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ArrowTriangleLeftFilledIcon = (
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
      d="M15.6642 4.318C17.6558 3.3226 20 4.77 20 6.9972v10.0042c0 2.2272-2.3442 3.6746-4.3358 2.6792l-10.008-5.0022c-2.2083-1.1038-2.2083-4.2545 0-5.3582z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowTriangleLeftFilledIcon);
export default ForwardRef;
