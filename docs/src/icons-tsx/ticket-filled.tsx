import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const TicketFilledIcon = (
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
      d="M2 8c0-2.2091 1.7909-4 4-4h12c2.2091 0 4 1.7909 4 4v1.25c0 .4089-.249.7766-.6286.9285-1.6619.6647-1.6619 2.9783 0 3.643.3796.1519.6286.5196.6286.9285V16c0 2.2091-1.7909 4-4 4H6c-2.2091 0-4-1.7909-4-4v-1.25a1 1 0 0 1 .6286-.9285c1.6619-.6647 1.6619-2.9783 0-3.643A1 1 0 0 1 2 9.25zm13-1c.5523 0 1 .4477 1 1v.01c0 .5523-.4477 1-1 1s-1-.4477-1-1V8c0-.5523.4477-1 1-1m0 4c.5523 0 1 .4477 1 1v.01c0 .5523-.4477 1-1 1s-1-.4477-1-1V12c0-.5523.4477-1 1-1m0 4c.5523 0 1 .4477 1 1v.01c0 .5523-.4477 1-1 1s-1-.4477-1-1V16c0-.5523.4477-1 1-1"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(TicketFilledIcon);
export default ForwardRef;
