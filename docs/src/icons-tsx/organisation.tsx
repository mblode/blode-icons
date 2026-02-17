import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const OrganisationIcon = (
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
      d="M12 12c2.4853 0 4.5-2.0147 4.5-4.5S14.4853 3 12 3 7.5 5.0147 7.5 7.5 9.5147 12 12 12Zm0 0v3m-5 2.5C7 18.8807 5.8807 20 4.5 20S2 18.8807 2 17.5 3.1193 15 4.5 15 7 16.1193 7 17.5Zm0 0h2.5m5 0c0 1.3807-1.1193 2.5-2.5 2.5s-2.5-1.1193-2.5-2.5m5 0c0-1.3807-1.1193-2.5-2.5-2.5m2.5 2.5H17m-7.5 0c0-1.3807 1.1193-2.5 2.5-2.5m5 2.5c0 1.3807 1.1193 2.5 2.5 2.5s2.5-1.1193 2.5-2.5-1.1193-2.5-2.5-2.5-2.5 1.1193-2.5 2.5Z"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(OrganisationIcon);
export default ForwardRef;
