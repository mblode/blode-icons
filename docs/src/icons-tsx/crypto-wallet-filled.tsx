import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const CryptoWalletFilledIcon = (
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
      d="M5.4961 12.8862a1 1 0 0 1 1.0078 0l3 1.75A1 1 0 0 1 10 15.5V19a1 1 0 0 1-.4961.8638l-3 1.75a1 1 0 0 1-1.0078 0l-3-1.75A1 1 0 0 1 2 19v-3.5a1 1 0 0 1 .4961-.8638zM4 16.0744v2.3512l2 1.1667 2-1.1667v-2.3512l-2-1.1667z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
    <path
      clipRule="evenodd"
      d="M17 8c2.2091 0 4 1.7909 4 4v5c0 2.2091-1.7909 4-4 4h-5v-5.5a3 3 0 0 0-1.4884-2.5913l-3-1.75a3 3 0 0 0-3.0232 0L3 12.0269V6.5C3 4.567 4.567 3 6.5 3H14c1.6569 0 3 1.3431 3 3zM6.5 5C5.6716 5 5 5.6716 5 6.5S5.6716 8 6.5 8H15V6c0-.5523-.4477-1-1-1zm9 11c.8284 0 1.5-.6716 1.5-1.5s-.6716-1.5-1.5-1.5-1.5.6716-1.5 1.5.6716 1.5 1.5 1.5"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(CryptoWalletFilledIcon);
export default ForwardRef;
