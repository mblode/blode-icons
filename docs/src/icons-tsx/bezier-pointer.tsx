import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const BezierPointerIcon = (
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
      d="M16 6v.5c0 .8284.6716 1.5 1.5 1.5h.5m-2-2v-.5c0-.8284.6716-1.5 1.5-1.5h1c.8284 0 1.5.6716 1.5 1.5v1c0 .8284-.6716 1.5-1.5 1.5H18m-2-2H8M6 8v8m2 2h2m8-10v2M5.5 20h1c.8284 0 1.5-.6716 1.5-1.5v-1c0-.8284-.6716-1.5-1.5-1.5h-1c-.8284 0-1.5.6716-1.5 1.5v1c0 .8284.6716 1.5 1.5 1.5m0-12h1C7.3284 8 8 7.3284 8 6.5v-1C8 4.6716 7.3284 4 6.5 4h-1C4.6716 4 4 4.6716 4 5.5v1C4 7.3284 4.6716 8 5.5 8m7.6154 4.4972 6.452 1.8435c.4314.1232.4947.7083.0997.921l-2.7315 1.4708a.5.5 0 0 0-.2031.2031l-1.4708 2.7315c-.2127.395-.7978.3317-.921-.0997l-1.8435-6.452c-.1077-.3772.241-.7259.6182-.6182"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(BezierPointerIcon);
export default ForwardRef;
