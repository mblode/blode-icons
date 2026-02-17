import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const TextEditFilledIcon = (
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
      d="M21.7071 5.293c-1.4951-1.4951-3.9191-1.4951-5.4142 0l-8.1213 8.1213A4 4 0 0 0 7 16.2427v2.7574c0 .5522.4477 1 1 1h2.7574a4 4 0 0 0 2.8284-1.1716l8.1213-8.1213c1.4951-1.4951 1.4951-3.9192 0-5.4142M2 5c-.5523 0-1 .4478-1 1s.4477 1 1 1h7c.5523 0 1-.4477 1-1s-.4477-1-1-1zM2 9c-.5523 0-1 .4478-1 1.0001s.4477 1 1 1h4c.5523 0 1-.4478 1-1s-.4477-1-1-1z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(TextEditFilledIcon);
export default ForwardRef;
