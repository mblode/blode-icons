import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const PaperPlaneFilledIcon = (
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
      d="M3.1136 6.1782c-.665-2.1057 1.527-3.9764 3.502-2.9889l13.1491 6.5745c1.8426.9213 1.8426 3.5509 0 4.4722l-13.149 6.5745c-1.9751.9875-4.167-.8832-3.502-2.9889L4.6361 13h4.3646c.5522 0 1-.4477 1-1s-.4478-1-1-1H4.6363z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(PaperPlaneFilledIcon);
export default ForwardRef;
