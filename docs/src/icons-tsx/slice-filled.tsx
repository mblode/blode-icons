import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const SliceFilledIcon = (
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
      d="M7.2073 3.7929c-1.219-1.219-3.1952-1.219-4.4142 0s-1.219 3.1952 0 4.4142L6.5861 12l-2.293 2.2929c-.3905.3905-.3905 1.0237 0 1.4142 3.0885 3.0884 5.7651 4.6057 8.5347 5.0904 2.7318.4781 5.4205-.0787 8.415-.8274a.9998.9998 0 0 0 .4645-1.6772z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SliceFilledIcon);
export default ForwardRef;
