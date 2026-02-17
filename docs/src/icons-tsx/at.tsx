import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const AtIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M16.7368 19.6541C15.361 20.5073 13.738 21 12 21c-4.9706 0-9-4.0294-9-9s4.0294-9 9-9 9 4.0294 9 9c0 1.9262-.9572 3.9154-3.1899 3.7125-1.8368-.167-3.1589-1.8388-2.898-3.6646L15.4274 8.5m-.5693 3.9675c-.2991 2.1285-2.0515 3.6418-3.9139 3.3801-1.8625-.2618-3.1298-2.1995-2.8306-4.328s2.0514-3.6418 3.9139-3.38c1.8624.2617 3.1298 2.1994 2.8306 4.3279Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(AtIcon);
export default ForwardRef;
