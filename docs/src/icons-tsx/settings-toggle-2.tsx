import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const SettingsToggle2Icon = (
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
      d="M17 17H7c-2.7614 0-5-2.2386-5-5s2.2386-5 5-5h10m0 10c2.7614 0 5-2.2386 5-5s-2.2386-5-5-5m0 10c-2.7614 0-5-2.2386-5-5s2.2386-5 5-5"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(SettingsToggle2Icon);
export default ForwardRef;
