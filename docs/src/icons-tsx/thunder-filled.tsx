import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ThunderFilledIcon = (
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
      d="M16.4173 2.645c.6495-2.0108-1.9302-3.63-3.4005-1.9353L3.4925 11.6886c-1.1088 1.278-.2325 3.3204 1.5034 3.3204h4.636l-2.05 6.3461c-.6495 2.0107 1.9303 3.63 3.4005 1.9352l9.5243-10.9789c1.1088-1.278.2325-3.3204-1.5035-3.3204h-4.6359z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(ThunderFilledIcon);
export default ForwardRef;
