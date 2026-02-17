import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const TrashPermanentlyIcon = (
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
      d="m5 6.5.8073 11.7064C5.9158 19.7794 7.2235 21 8.8003 21h6.3995c1.5767 0 2.8844-1.2206 2.9929-2.7936L19 6.5M3.5 6h17M8.071 5.7462C8.4234 3.8975 10.0484 2.5 12 2.5s3.5765 1.3975 3.9291 3.2462M10 11l4 4m0-4-4 4"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(TrashPermanentlyIcon);
export default ForwardRef;
