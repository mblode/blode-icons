import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ChevronTriangleUpSmallFilledIcon = (
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
      d="M9.5223 14.25c-1.2482 0-1.9504-1.4356-1.184-2.4209l2.4777-3.1856c.6005-.772 1.7675-.772 2.368 0l2.4777 3.1856c.7663.9853.0642 2.4209-1.184 2.4209z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(ChevronTriangleUpSmallFilledIcon);
export default ForwardRef;
