import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const LiquidGlassIcon = (
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
      d="M17 8.5v-1c0-1.6569-1.3431-3-3-3H5.5c-1.6568 0-3 1.3431-3 3v5c0 1.6569 1.3432 3 3 3H6"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
      d="M16 8.5h-4.5C8.4624 8.5 6 10.9624 6 14s2.4624 5.5 5.5 5.5H16c3.0376 0 5.5-2.4624 5.5-5.5S19.0376 8.5 16 8.5Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M18 12.0039c0-1.0946-.8954-1.99-2-2h-.2077a.1556.1556 0 0 0-.1556.1556c0 .0464.0212.0899.0547.122a.997.997 0 0 1 .3086.7224v1.9958c0 .8284-.6716 1.5-1.5 1.5H9.3926c-.631.0001-1.1425.5116-1.1426 1.1426 0 .7398.4328 1.3788 1.059 1.6774.2178.1039.441-.0787.441-.32a.5.5 0 0 1 .5-.5h4.25c1.933 0 3.5-1.567 3.5-3.5z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(LiquidGlassIcon);
export default ForwardRef;
