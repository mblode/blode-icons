import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ListSparkleFilledIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    fill="none"
    height={24}
    ref={ref}
    viewBox="0 0 25 24"
    width={25}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.75 5c-.5523 0-1 .4477-1 1s.4477 1 1 1h16c.5523 0 1-.4477 1-1s-.4477-1-1-1zM18.6691 9.606a.9999.9999 0 0 0-1.8382 0l-1.3425 3.1324-3.1323 1.3425a.9999.9999 0 0 0 0 1.8382l3.1323 1.3425 1.3425 3.1323a.9999.9999 0 0 0 1.8382 0l1.3425-3.1323 3.1323-1.3425a.9999.9999 0 0 0 0-1.8382l-3.1323-1.3425zM4.75 11c-.5523 0-1 .4477-1 1s.4477 1 1 1h5c.5523 0 1-.4477 1-1s-.4477-1-1-1zM4.75 17c-.5523 0-1 .4477-1 1s.4477 1 1 1h3c.5523 0 1-.4477 1-1s-.4477-1-1-1z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(ListSparkleFilledIcon);
export default ForwardRef;
