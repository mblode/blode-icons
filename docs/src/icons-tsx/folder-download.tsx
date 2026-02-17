import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const FolderDownloadIcon = (
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
      d="M17 19h1c1.6569 0 3-1.3431 3-3v-6c0-1.6569-1.3431-3-3-3h-4.9296a2 2 0 0 1-1.6641-.8906l-.5157-.7735A3 3 0 0 0 8.3945 4H6C4.3431 4 3 5.3431 3 7v9c0 1.6569 1.3431 3 3 3h1m5-7v6m0 0 2.5-2.5M12 18l-2.5-2.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(FolderDownloadIcon);
export default ForwardRef;
