import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const PaymentIcon = (
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
      d="M9.5 5.3984c-2.4073.7913-4.3103 2.6943-5.1016 5.1017m15.4613 4a8.05 8.05 0 0 0 .1404-1.5c0-2.0106-.7417-3.8479-1.9664-5.2533M6.7084 19c1.4103 1.2447 3.2628 2 5.2917 2 .5126 0 1.014-.0483 1.4999-.1404"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      style={{
        stroke: "currentColor",
        strokeOpacity: 1,
      }}
    />
    <circle
      cx={12}
      cy={5}
      r={2.5}
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
      d="M3.8205 14.8353c1.1955-.6902 2.7243-.2806 3.4145.9149s.2806 2.7243-.9149 3.4145-2.7242.2806-3.4145-.9149-.2806-2.7243.915-3.4145M17.6721 19.1647c-1.1955-.6902-1.6052-2.219-.9149-3.4145s2.2189-1.6051 3.4145-.9149 1.6051 2.219.9149 3.4145c-.6903 1.1955-2.219 1.6051-3.4145.9149"
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
const ForwardRef = forwardRef(PaymentIcon);
export default ForwardRef;
