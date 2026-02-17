import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const SettingsGear1Icon = (
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
      d="M10.53 3.8273a3 3 0 0 1 2.9415 0l5.0001 2.8125a3 3 0 0 1 1.5292 2.6147v5.4909a3 3 0 0 1-1.5293 2.6147l-5 2.8125a3 3 0 0 1-2.9415 0l-5-2.8122a3 3 0 0 1-1.5292-2.6148V9.2545A3 3 0 0 1 5.53 6.6397z"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
      d="M10.5292 3.8273a3 3 0 0 1 2.9416 0l5 2.8125A3 3 0 0 1 20 9.2545v5.4909a3 3 0 0 1-1.5292 2.6147l-5.0001 2.8125a3 3 0 0 1-2.9414 0l-5-2.8122A3 3 0 0 1 4 14.7456V9.2545a3 3 0 0 1 1.5292-2.6148z"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
      d="M15 12c0 1.6568-1.3431 3-3 3s-3-1.3432-3-3 1.3432-3 3-3 3 1.3431 3 3Z"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(SettingsGear1Icon);
export default ForwardRef;
