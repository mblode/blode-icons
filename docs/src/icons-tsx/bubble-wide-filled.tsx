import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const BubbleWideFilledIcon = (
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
      d="M18.0019 3h-12c-2.209 0-4 1.7909-4 4v8.0358c0 2.2091 1.791 4 4 4h2.6497l2.7037 2.2663a1 1 0 0 0 1.2804.0037l2.74-2.27h2.6263c2.2091-.0001 4-1.7909 4-4V7c0-2.2091-1.7909-4-4.0001-4"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(BubbleWideFilledIcon);
export default ForwardRef;
