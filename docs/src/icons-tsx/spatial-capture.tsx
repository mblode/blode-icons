import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const SpatialCaptureIcon = (
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
      d="m8 5 .0001 8.5m-4-1.5L11.5 16.3301M8 18.9283l7.5-4.3301m.5001 4.3301L16 10.5m4.0001 1.5L12.5 7.6698M16.1246 5 8.5 9.402M4.8398 6.134l5.6603-3.268a3 3 0 0 1 3 0l5.6603 3.268a3 3 0 0 1 1.5 2.598v6.536a3 3 0 0 1-1.5 2.598l-5.6603 3.268a3 3 0 0 1-3 0l-5.6603-3.268a3 3 0 0 1-1.5-2.598V8.732a3 3 0 0 1 1.5-2.598"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(SpatialCaptureIcon);
export default ForwardRef;
