import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Newspaper2Icon = (
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
      d="M12 8c0-1.6569 1.3431-3 3-3h5c1.1046 0 2 .8954 2 2v10c0 1.1046-.8954 2-2 2h-4.723c-.6804 0-1.3474.1642-1.9262.5219A3.664 3.664 0 0 0 12 21m0-13c0-1.6569-1.3431-3-3-3H4c-1.1046 0-2 .8954-2 2v10c0 1.1046.8954 2 2 2h4.723c.6804 0 1.3474.1642 1.9262.5219A3.664 3.664 0 0 1 12 21m0-13v13"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(Newspaper2Icon);
export default ForwardRef;
