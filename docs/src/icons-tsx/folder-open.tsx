import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const FolderOpenIcon = (
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
      d="M4.4408 19h13.5888a2 2 0 0 0 1.909-1.4035l1.6557-5.2982c.2012-.644-.2799-1.2983-.9545-1.2983H20M4.4408 19a1.441 1.441 0 0 0 1.3751-1.011l1.7455-5.5856A2 2 0 0 1 9.4704 11H20M4.4408 19C3.645 19 3 18.3549 3 17.5592V7c0-1.6569 1.3431-3 3-3h2.3945a3 3 0 0 1 2.4961 1.3359l.5157.7735A2 2 0 0 0 13.0704 7H18c1.1046 0 2 .8954 2 2v2"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(FolderOpenIcon);
export default ForwardRef;
