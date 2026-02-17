import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const BroomIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="m12.9474 9.1023 2.8222-4.9585c.6127-1.0766 1.9795-1.46 3.0643-.8597 1.0929.6048 1.4878 1.9797.882 3.0708l-2.7829 5.012m-7.9309.48C7.3566 13.7881 5.4904 14.3741 3 13.8443c1 6.6562 12.5045 10.9854 13.5048 2.4967m1.4534.1606-9.9645-5.5142.2434-.4384c.8037-1.4474 2.628-1.9703 4.0763-1.1683l4.7178 2.6122c1.4486.8021 1.9727 2.6257 1.1688 4.0732z"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(BroomIcon);
export default ForwardRef;
