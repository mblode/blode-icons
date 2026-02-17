import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const NuclearPowerPlantIcon = (
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
      d="M17.5009 11.5443c-.2652-1.5126-.4604-3.0579-.6276-4.7777C16.7216 5.2069 15.4255 4 13.8585 4h-4.935c-1.567 0-2.8632 1.207-3.0148 2.7666-.4198 4.3178-1.016 7.5357-2.4544 11.8979-.2156.654.2662 1.3355.955 1.3355h4.591"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
      d="M9 17c0-3.3137 2.6863-6 6-6s6 2.6863 6 6v2c0 .5523-.4477 1-1 1H9z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
      d="M9.5 16h11"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(NuclearPowerPlantIcon);
export default ForwardRef;
