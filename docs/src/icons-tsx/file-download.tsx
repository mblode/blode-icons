import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const FileDownloadIcon = (
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
      d="M8 21c-1.6569 0-3-1.3431-3-3V6c0-1.6569 1.3431-3 3-3h4.1716a2 2 0 0 1 1.4142.5858l4.8284 4.8284A2 2 0 0 1 19 9.8284V18c0 1.6569-1.3431 3-3 3M13 3.5V7c0 1.1046.8954 2 2 2h3.5M12 14v6m0 0 2.5-2.5M12 20l-2.5-2.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(FileDownloadIcon);
export default ForwardRef;
