import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const SecretPhraseIcon = (
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
      d="M18 5H6C4.3431 5 3 6.3431 3 8v8c0 1.6569 1.3431 3 3 3h12c1.6569 0 3-1.3431 3-3V8c0-1.6569-1.3431-3-3-3M7 9h3M14 9h3M7 12h3M14 12h3M7 15h3M14 15h3"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      style={{
        stroke: "currentColor",
        strokeOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SecretPhraseIcon);
export default ForwardRef;
