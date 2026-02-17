import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const BubbleSparkleIcon = (
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
      d="M4.002 7c0-1.6568 1.3431-3 3-3h9.9999c1.6569 0 3.0001 1.3431 3.0001 3v8.0358c0 1.6568-1.3432 3-3 3h-1.6263a1 1 0 0 0-.638.2299l-2.74 2.2701-2.7037-2.2664a1 1 0 0 0-.6424-.2336H7.0019c-1.6568 0-3-1.3432-3-3z"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
      d="M12.5714 7.5714a.5714.5714 0 1 0-1.1428 0c0 1.1208-.2483 1.7973-.6541 2.2031s-1.0823.6541-2.203.6541a.5714.5714 0 1 0 0 1.1428c1.1206 0 1.7972.2483 2.203.6541s.6541 1.0824.6541 2.2031a.5714.5714 0 1 0 1.1428 0c0-1.1207.2483-1.7973.6541-2.2031s1.0824-.6541 2.2031-.6541a.5714.5714 0 1 0 0-1.1428c-1.1207 0-1.7973-.2483-2.2031-.654-.4058-.406-.6541-1.0824-.6541-2.2032"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(BubbleSparkleIcon);
export default ForwardRef;
