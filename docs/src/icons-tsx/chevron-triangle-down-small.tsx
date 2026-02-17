import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ChevronTriangleDownSmallIcon = (
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
      d="M14.4777 10.75H9.5223c-.416 0-.6501.4785-.3947.807l2.4777 3.1856c.2002.2573.5892.2573.7894 0l2.4777-3.1856c.2554-.3285.0214-.807-.3947-.807Z"
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
const ForwardRef = forwardRef(ChevronTriangleDownSmallIcon);
export default ForwardRef;
