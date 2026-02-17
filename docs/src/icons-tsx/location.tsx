import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const LocationIcon = (
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
      d="M15.3989 17.4579a3 3 0 0 0 2.0604-2.0604l2.8004-9.8013c.3232-1.1316-.7229-2.1777-1.8544-1.8544L8.6039 6.5422a3 3 0 0 0-2.0604 2.0604l-2.8003 9.8013c-.3234 1.1316.7228 2.1777 1.8543 1.8544z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M14.0014 12.0001c0 1.1045-.8954 2-2 2s-2-.8955-2-2 .8954-2 2-2 2 .8954 2 2Z"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(LocationIcon);
export default ForwardRef;
