import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const FolderPaperIcon = (
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
      d="M4 8V6c0-1.1046.8954-2 2-2h8c1.1046 0 2 .8954 2 2M4 8c-.5501 0-.996.446-.996.996V17c0 1.6569 1.343 3 3 3h11.9999c1.6569 0 3-1.3431 3-3v-4.9961C21.0039 11.4495 20.5544 11 20 11M4 8h3.7613a3 3 0 0 1 2.1213.8787l1.2426 1.2426A3 3 0 0 0 13.2465 11H16m0 0V6m0 5h4m-4-5h2c1.1046 0 2 .8954 2 2v3"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(FolderPaperIcon);
export default ForwardRef;
