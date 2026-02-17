import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const CrownIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M4.0025 16.6119 2 7l6 3 4-6 4 6 6-3-2.0025 9.6119C19.7077 18.003 18.4816 19 17.0606 19H6.9394c-1.421 0-2.6471-.997-2.937-2.3881Z"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={2}
      style={{
        stroke: "currentColor",
        strokeOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(CrownIcon);
export default ForwardRef;
