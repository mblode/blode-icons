import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const PackageDelivery2Icon = (
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
      d="M12 20H7c-1.6569 0-3-1.3431-3-3V7c0-1.6569 1.3431-3 3-3h10c1.6569 0 3 1.3431 3 3v2M9 4v4c0 .5523.4477 1 1 1h4c.5523 0 1-.4477 1-1V4m3.2427 16.4853-2.1213-2.1213c-1.1716-1.1716-1.1716-3.0711 0-4.2427s3.071-1.1716 4.2426 0 1.1716 3.0711 0 4.2427z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(PackageDelivery2Icon);
export default ForwardRef;
