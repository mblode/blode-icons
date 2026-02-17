import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const BubbleQuestionIcon = (
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
      d="M12.0218 11.6633c.1016-.6765.4801-1.0419.8595-1.2997.3711-.2523.7421-.5797.7421-1.186 0-.8366-.6712-1.5143-1.5-1.5143s-1.5.6777-1.5 1.5144m1.3743 11.3581 2.74-2.2701a1 1 0 0 1 .638-.2299h1.6263c1.6568 0 3-1.3432 3-3V7c0-1.6569-1.3432-3-3.0001-3h-10c-1.6568 0-3 1.3432-3 3v8.0358c0 1.6568 1.3432 3 3 3h1.6497c.2349 0 .4623.0827.6424.2336z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
    />
    <path
      d="M11.125 14.5a.875.875 0 1 0 1.7501-.0001.875.875 0 0 0-1.7501.0001Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={0.75}
      style={{
        fill: "currentColor",
        fillOpacity: 1,
        stroke: "currentColor",
        strokeOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(BubbleQuestionIcon);
export default ForwardRef;
