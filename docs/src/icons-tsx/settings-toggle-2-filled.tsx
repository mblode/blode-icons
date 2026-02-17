import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const SettingsToggle2FilledIcon = (
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
      clipRule="evenodd"
      d="M1 12c0-3.3137 2.6863-6 6-6h10c3.3137 0 6 2.6863 6 6s-2.6863 6-6 6H7c-3.3137 0-6-2.6863-6-6m16-4c-2.2091 0-4 1.7909-4 4s1.7909 4 4 4 4-1.7909 4-4-1.7909-4-4-4"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SettingsToggle2FilledIcon);
export default ForwardRef;
