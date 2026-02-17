import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const TextareaDragFilledIcon = (
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
      d="M20.2929 6.2929c.3905-.3905 1.0235-.3905 1.4141 0s.3905 1.0235 0 1.414l-14 14.0001c-.3906.3905-1.0236.3905-1.4141 0s-.3905-1.0236 0-1.4141zm0 8c.3905-.3905 1.0235-.3905 1.4141 0s.3905 1.0235 0 1.4141l-6 6c-.3906.3905-1.0236.3905-1.4141 0s-.3905-1.0236 0-1.4141z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(TextareaDragFilledIcon);
export default ForwardRef;
