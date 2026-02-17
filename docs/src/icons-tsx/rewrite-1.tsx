import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Rewrite1Icon = (
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
      d="M7 5c-.93 0-1.395 0-1.7765.1022a3 3 0 0 0-2.1213 2.1213C3 7.605 3 8.07 3 9v5.2c0 1.6802 0 2.5202.327 3.162a3 3 0 0 0 1.311 1.311C5.2798 19 6.1198 19 7.8 19H11M17.5 19c.4644 0 .6966 0 .8916-.0257 1.3462-.1772 2.4055-1.2365 2.5827-2.5827C21 16.1966 21 15.9644 21 15.5V9.8c0-1.6802 0-2.5202-.327-3.162a3 3 0 0 0-1.311-1.311C18.7202 5 17.8802 5 16.2 5H13M9 10h6M9 14h4"
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
      d="M9.5224 4.612 6.8153 2.4123C6.4885 2.147 6 2.3794 6 2.8004v4.3991c0 .421.4885.6536.8153.388l2.707-2.1994c.2464-.2001.2464-.576 0-.7762M14.4776 18.6119l2.7071-2.1995c.3268-.2655.8153-.0329.8153.3881v4.399c0 .421-.4885.6536-.8153.3881l-2.7071-2.1995c-.2463-.2001-.2463-.5761 0-.7762"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(Rewrite1Icon);
export default ForwardRef;
