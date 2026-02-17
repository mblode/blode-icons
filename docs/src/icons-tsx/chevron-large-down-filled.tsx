import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ChevronLargeDownFilledIcon = (
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
      d="M2.126 9.5145c.2682-.4827.877-.6567 1.3598-.3885l7.5431 4.1906a2 2 0 0 0 1.9426 0l7.543-4.1906c.4828-.2682 1.0916-.0942 1.3598.3885s.0943 1.0916-.3885 1.3598l-7.543 4.1906a4 4 0 0 1-3.8852 0l-7.543-4.1906c-.4828-.2682-.6568-.877-.3886-1.3598"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(ChevronLargeDownFilledIcon);
export default ForwardRef;
