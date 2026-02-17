import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Box2AltFillFilledIcon = (
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
      d="M21 7c0-2.2091-1.7908-4-4-4H7C4.791 3 3 4.7909 3 7v10c0 2.2091 1.7909 4 4 4h10c2.2092 0 4-1.7909 4-4zM7 5h10c1.1046 0 2 .8954 2 2v5h-3.126c-.4563 0-.8547.3089-.9685.7507C14.5724 14.0449 13.3965 15 12 15s-2.5725-.9551-2.9055-2.2493A1 1 0 0 0 8.126 12H5V7c0-1.1046.8955-2 2-2"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(Box2AltFillFilledIcon);
export default ForwardRef;
