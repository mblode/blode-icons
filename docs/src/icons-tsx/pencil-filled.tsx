import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const PencilFilledIcon = (
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
      d="M14.5429 3.5432c1.6332-1.6331 4.281-1.6331 5.9142 0s1.6332 4.281 0 5.9143L8.5 21.4145a2 2 0 0 1-1.4142.5857H3c-.5523 0-1-.4477-1-1v-4.0857c0-.5305.2107-1.0392.5858-1.4143l9.5002-9.5001L18 11.9142 19.4142 10.5l-5.914-5.914z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(PencilFilledIcon);
export default ForwardRef;
