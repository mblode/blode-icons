import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ArrowUndoDownFilledIcon = (
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
      d="M7.2069 18.2929c.3905.3905.3905 1.0237 0 1.4142s-1.0237.3905-1.4142 0l-2.9394-2.9393c-.9763-.9763-.9763-2.5593 0-3.5356l2.9394-2.9393c.3905-.3905 1.0237-.3905 1.4142 0s.3905 1.0237 0 1.4142L4.9139 14H16.5c1.933 0 3.5-1.567 3.5-3.5S18.433 7 16.5 7H12c-.5523 0-1-.4477-1-1s.4477-1 1-1h4.5c3.0376 0 5.5 2.4624 5.5 5.5S19.5376 16 16.5 16H4.914z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowUndoDownFilledIcon);
export default ForwardRef;
