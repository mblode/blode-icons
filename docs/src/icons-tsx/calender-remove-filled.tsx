import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const CalenderRemoveFilledIcon = (
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
      d="M9 3c0-.5523-.4477-1-1-1s-1 .4477-1 1v1C4.7909 4 3 5.7909 3 8v9c0 2.2091 1.7909 4 4 4h4c.5523 0 1-.4477 1-1s-.4477-1-1-1H7c-1.1046 0-2-.8954-2-2v-7h14v1c0 .5523.4477 1 1 1s1-.4477 1-1V8c0-2.2091-1.7909-4-4-4V3c0-.5523-.4477-1-1-1s-1 .4477-1 1v1H9z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
    <path
      d="M15.2929 15.2929c-.3905.3906-.3905 1.0237 0 1.4142L16.5859 18l-1.293 1.2929c-.3905.3905-.3905 1.0236 0 1.4142s1.0236.3905 1.4142 0l1.293-1.2929 1.2928 1.2929c.3905.3905 1.0236.3905 1.4142 0s.3905-1.0236 0-1.4142L19.4144 18l1.2927-1.2929c.3905-.3906.3905-1.0237 0-1.4142s-1.0237-.3905-1.4142 0l-1.2928 1.2929-1.293-1.2929c-.3906-.3905-1.0237-.3905-1.4142 0"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(CalenderRemoveFilledIcon);
export default ForwardRef;
