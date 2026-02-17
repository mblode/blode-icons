import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const StreamingIcon = (
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
      d="M8.0816 18.5c.3921-1.7173 1.8773-3 3.9184-3s3.5263 1.2827 3.9184 3M18 8.25a.25.25 0 0 1-.25.25m.25-.25a.25.25 0 0 0-.25-.25m.25.25h-.5m.25.25a.25.25 0 0 1-.25-.25m.25.25V8m-.25.25a.25.25 0 0 1 .25-.25m.2165.125a.25.25 0 0 1-.0915.3415m.0915-.3415a.25.25 0 0 0-.3415-.0915m.3415.0915-.433.25m.3415.0915a.25.25 0 0 1-.3415-.0915m.3415.0915-.25-.433m-.0915.3415a.25.25 0 0 1 .0915-.3415m.2501 0a.25.25 0 0 1 .0915.3416m-.0915-.3415a.25.25 0 0 0-.3415.0915m.3415-.0915-.25.433m.3415-.0915a.25.25 0 0 1-.3415.0915m.3415-.0915-.433-.25m.0915.3415a.25.25 0 0 1-.0915-.3415M14.25 10.75c0 1.2426-1.0074 2.25-2.25 2.25s-2.25-1.0074-2.25-2.25S10.7574 8.5 12 8.5s2.25 1.0074 2.25 2.25M6 19h12c1.6569 0 3-1.3431 3-3V8c0-1.6569-1.3431-3-3-3H6C4.3431 5 3 6.3431 3 8v8c0 1.6569 1.3431 3 3 3"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(StreamingIcon);
export default ForwardRef;
