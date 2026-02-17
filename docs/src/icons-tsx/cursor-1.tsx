import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Cursor1Icon = (
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
      d="m3.7397 5.6443 4.9176 14.382c.4459 1.3039 2.2664 1.3671 2.8016.0972l2.3318-5.5331c.152-.3607.439-.6477.7997-.7997l5.5331-2.3318c1.2699-.5352 1.2067-2.3557-.0972-2.8016L5.6443 3.7397c-1.1797-.4034-2.308.7249-1.9046 1.9046Z"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2.0556}
    />
  </svg>
);
const ForwardRef = forwardRef(Cursor1Icon);
export default ForwardRef;
