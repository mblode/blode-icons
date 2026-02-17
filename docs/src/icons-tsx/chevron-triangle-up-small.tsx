import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ChevronTriangleUpSmallIcon = (
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
      d="M14.4778 13.25H9.5224c-.416 0-.6501-.4785-.3947-.8069l2.4777-3.1856c.2002-.2574.5892-.2574.7894 0l2.4776 3.1856c.2555.3284.0214.8069-.3946.8069Z"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
      style={{
        stroke: "currentColor",
        strokeOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(ChevronTriangleUpSmallIcon);
export default ForwardRef;
