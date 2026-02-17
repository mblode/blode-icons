import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const LandPlotSimpleIcon = (
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
      d="m12 8 6-3-6-3v10"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
      d="m8 11.99-5.5 3.14c-.62.36-.62 1.38 0 1.74l8.5 4.86c.63.36 1.37.36 2 0l8.5-4.86c.62-.36.62-1.38 0-1.74L16 12M6.49 12.85l11.02 6.3M17.51 12.85 6.5 19.15"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(LandPlotSimpleIcon);
export default ForwardRef;
