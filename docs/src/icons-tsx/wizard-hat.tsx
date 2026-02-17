import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const WizardHatIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    fill="none"
    height={24}
    ref={ref}
    viewBox="0 0 25 24"
    width={25}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.75 20h18"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      style={{
        stroke: "currentColor",
        strokeOpacity: 1,
      }}
    />
    <path
      d="M13.2085 15.75c.1125-.0805.211-.179.2915-.2915.0805.1125.179.211.2915.2915a1.26 1.26 0 0 0-.2915.2915 1.26 1.26 0 0 0-.2915-.2915ZM10.4585 11.75c.1125-.0805.211-.179.2915-.2915.0805.1125.179.211.2915.2915a1.26 1.26 0 0 0-.2915.2915 1.26 1.26 0 0 0-.2915-.2915Z"
      stroke="currentColor"
      strokeWidth={2}
      style={{
        stroke: "currentColor",
        strokeOpacity: 1,
      }}
    />
    <path
      d="m5.75 19.5001 5.7588-15.2196c.5482-1.4489 2.4645-1.7513 3.4323-.5416L18.75 8.5001h-3.8l4.8 11"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={2}
      style={{
        stroke: "currentColor",
        strokeOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(WizardHatIcon);
export default ForwardRef;
