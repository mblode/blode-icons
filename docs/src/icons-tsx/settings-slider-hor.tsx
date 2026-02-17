import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const SettingsSliderHorIcon = (
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
      d="M14 7H4m10 0c0-1.6575 1.3425-3 3-3s3 1.3425 3 3-1.3425 3-3 3-3-1.3425-3-3m6 10h-8m0 0c0 1.6575-1.3425 3-3 3s-3-1.3425-3-3m6 0c0-1.6575-1.3425-3-3-3s-3 1.3425-3 3m0 0H4"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(SettingsSliderHorIcon);
export default ForwardRef;
