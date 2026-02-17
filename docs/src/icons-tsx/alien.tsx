import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const AlienIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M20 11c0 6-6 11-8 11s-8-5-8-11c0-4.4183 3.5817-8 8-8s8 3.5817 8 8Z"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
      d="M7.5 11.0086c1.4647-.0885 2.3885.5048 2.5 1.9858-1.4324.0639-2.445-.4106-2.5-1.9858ZM16.5 11.0086c-1.4647-.0885-2.3885.5048-2.5 1.9858 1.4325.0639 2.445-.4106 2.5-1.9858Z"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(AlienIcon);
export default ForwardRef;
