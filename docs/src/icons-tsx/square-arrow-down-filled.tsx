import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const SquareArrowDownFilledIcon = (
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
      clipRule="evenodd"
      d="M3 7c0-2.2091 1.7909-4 4-4h10c2.2091 0 4 1.7909 4 4v10c0 2.2091-1.7909 4-4 4H7c-2.2091 0-4-1.7909-4-4zm6 10c-.5523 0-1-.4477-1-1s.4477-1 1-1h6c.5523 0 1 .4477 1 1s-.4477 1-1 1zm5.7071-5.2929-2 2c-.3905.3905-1.0237.3905-1.4142 0l-2-2c-.3905-.3905-.3905-1.0237 0-1.4142s1.0237-.3905 1.4142 0l.2929.2929V8c0-.5523.4477-1 1-1s1 .4477 1 1v2.5858l.2929-.2929c.3905-.3905 1.0237-.3905 1.4142 0s.3905 1.0237 0 1.4142"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SquareArrowDownFilledIcon);
export default ForwardRef;
