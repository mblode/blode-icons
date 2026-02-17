import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Camera4FilledIcon = (
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
      d="M14 10c-1.1046 0-2 .8954-2 2s.8954 2 2 2 2-.8954 2-2-.8954-2-2-2"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
    <path
      clipRule="evenodd"
      d="M6.7426 3c-.8722 0-1.715.2849-2.404.803-.3862.2904-.6317.6627-.7964.96l-.0807.1457C2.5707 5.6409 2 6.7539 2 8v8c0 2.2091 1.7909 4 4 4h12c2.2091 0 4-1.7909 4-4V8c0-2.2091-1.7909-4-4-4H9.9031a4 4 0 0 0-2.6457-1zM10 12c0-2.2091 1.7909-4 4-4s4 1.7909 4 4-1.7909 4-4 4-4-1.7909-4-4m-3-2c.5523 0 1-.4477 1-1s-.4477-1-1-1-1 .4477-1 1 .4477 1 1 1"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(Camera4FilledIcon);
export default ForwardRef;
