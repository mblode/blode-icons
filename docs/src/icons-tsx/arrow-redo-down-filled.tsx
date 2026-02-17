import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ArrowRedoDownFilledIcon = (
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
      d="M16.7931 18.2929c-.3905.3905-.3905 1.0237 0 1.4142s1.0237.3905 1.4142 0l2.9394-2.9393c.9763-.9763.9763-2.5593 0-3.5356l-2.9394-2.9393c-.3905-.3905-1.0237-.3905-1.4142 0s-.3905 1.0237 0 1.4142L19.086 14H7.5C5.567 14 4 12.433 4 10.5S5.567 7 7.5 7H12c.5523 0 1-.4477 1-1s-.4477-1-1-1H7.5C4.4624 5 2 7.4624 2 10.5S4.4624 16 7.5 16h11.586z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowRedoDownFilledIcon);
export default ForwardRef;
