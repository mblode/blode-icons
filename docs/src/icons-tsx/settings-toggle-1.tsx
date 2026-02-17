import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const SettingsToggle1Icon = (
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
      d="M2 12c0-3.3137 2.6863-6 6-6h8c3.3137 0 6 2.6863 6 6s-2.6863 6-6 6H8c-3.3137 0-6-2.6863-6-6Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M13 12c0-1.6569 1.3431-3 3-3s3 1.3431 3 3-1.3431 3-3 3-3-1.3431-3-3Z"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(SettingsToggle1Icon);
export default ForwardRef;
