import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const TagIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M7.4 7.5h.2m.4 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM3 6v4.7574a3 3 0 0 0 .8787 2.1213l7.25 7.25c1.1716 1.1716 3.071 1.1716 4.2426 0l4.7574-4.7574c1.1716-1.1716 1.1716-3.071 0-4.2426l-7.25-7.25A3 3 0 0 0 10.7574 3H6C4.3431 3 3 4.3431 3 6Z"
      stroke="currentColor"
      strokeLinecap="square"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(TagIcon);
export default ForwardRef;
