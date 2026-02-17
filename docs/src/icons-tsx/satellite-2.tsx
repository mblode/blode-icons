import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Satellite2Icon = (
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
      d="m7.5 12.4998 5.5-5.5c1.1046-1.1046 2.8954-1.1046 4 0s1.1046 2.8954 0 4l-5.5 5.5M7 17l-2 2M5.7497 8.7502 4.4139 7.4144c-.781-.781-.781-2.0474 0-2.8284l1.6716-1.6716c.781-.781 2.0474-.781 2.8284 0l1.3358 1.3358m-4.5 4.5 2.75 2.75m-2.75-2.75 4.5-4.5m0 0 2.75 2.75M15.25 18.25l1.3358 1.3358c.781.781 2.0474.781 2.8284 0l1.6716-1.6716c.781-.781.781-2.0474 0-2.8284L19.75 13.75m-4.5 4.5L12.5 15.5m2.75 2.75 4.5-4.5m0 0L17 11"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      style={{
        stroke: "currentColor",
        strokeOpacity: 1,
      }}
    />
    <path
      d="M9.8287 19.8282c1.5621-1.5621 1.5621-4.0947 0-5.6568s-4.0947-1.5621-5.6568 0z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      style={{
        stroke: "currentColor",
        strokeOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(Satellite2Icon);
export default ForwardRef;
