import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const SolarPanelIcon = (
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
      d="M5 20h14M5.5194 6.4117C5.8 5.0093 7.0311 4 8.4612 4h7.0812c1.43 0 2.6612 1.0094 2.9417 2.4117l.8 3.9999C19.6554 12.268 18.2355 14 16.3424 14H7.6612c-1.8932 0-3.313-1.732-2.9418-3.5883zM12 4v16M19 9H5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(SolarPanelIcon);
export default ForwardRef;
