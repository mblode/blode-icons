import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const SettingsSliderVerIcon = (
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
      d="M17 14V4m0 10c1.6575 0 3 1.3425 3 3s-1.3425 3-3 3-3-1.3425-3-3 1.3425-3 3-3M7 20v-8m0 0c-1.6575 0-3-1.3425-3-3s1.3425-3 3-3m0 6c1.6575 0 3-1.3425 3-3S8.6575 6 7 6m0 0V4"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(SettingsSliderVerIcon);
export default ForwardRef;
