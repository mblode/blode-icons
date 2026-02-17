import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const XIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M17.4033 3.5h2.8819l-6.2962 7.201 7.407 9.799h-5.7996l-4.5424-5.943L5.8564 20.5H2.9727l6.7344-7.7023L2.6016 3.5h5.9468l4.106 5.4322zm-1.0115 15.2738h1.5969L7.6807 5.1355H5.967z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(XIcon);
export default ForwardRef;
