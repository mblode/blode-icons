import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const BezierEditFilledIcon = (
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
      d="M19.1262 14.8738a.65.65 0 0 0-.9191 0L15 18.0809V19h.9191l3.2071-3.2071a.65.65 0 0 0 0-.9191m-2.3333-1.4142c1.0349-1.0349 2.7127-1.0349 3.7475 0s1.0349 2.7126 0 3.7475l-3.5 3.5a1 1 0 0 1-.7071.2929H14c-.5523 0-1-.4477-1-1v-2.3333a1 1 0 0 1 .2929-.7071z"
      fill="currentColor"
      fillRule="evenodd"
    />
    <path
      d="M5.5 3C4.1193 3 3 4.1193 3 5.5v1c0 1.2095.8589 2.2184 2 2.45v6.1c-1.1411.2316-2 1.2405-2 2.45v1C3 19.8807 4.1193 21 5.5 21h1c1.2095 0 2.2184-.8589 2.45-2H10c.5523 0 1-.4477 1-1s-.4477-1-1-1H8.95c-.1988-.9796-.9704-1.7512-1.95-1.95v-6.1c.9796-.1988 1.7512-.9704 1.95-1.95h6.1c.1988.9796.9704 1.7512 1.95 1.95V10c0 .5523.4477 1 1 1s1-.4477 1-1V8.95c1.1411-.2316 2-1.2405 2-2.45v-1C21 4.1193 19.8807 3 18.5 3h-1c-1.2095 0-2.2184.8589-2.45 2h-6.1C8.7184 3.8589 7.7095 3 6.5 3z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(BezierEditFilledIcon);
export default ForwardRef;
