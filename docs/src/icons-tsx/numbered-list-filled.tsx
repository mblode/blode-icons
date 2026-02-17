import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const NumberedListFilledIcon = (
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
      d="M6.526 3.6494a1 1 0 0 1 .4742.8506v5c0 .5523-.4477 1-1 1s-1-.4477-1-1V6.118l-.5528.2764c-.494.247-1.0946.0468-1.3416-.4472s-.0468-1.0946.4472-1.3416l2-1a1 1 0 0 1 .973.0438M12.0002 6c-.5522 0-1 .4477-1 1s.4478 1 1 1h8c.5523 0 1-.4477 1-1s-.4477-1-1-1zm0 10c-.5522 0-1 .4477-1 1s.4478 1 1 1h8c.5523 0 1-.4477 1-1s-.4477-1-1-1z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
    <path
      d="m4.8595 15.7929-.001.0009-.0014.001-.002.0015-.001.0008c-.4375.3315-1.0612.2484-1.3965-.1874-.3367-.4377-.2548-1.0656.183-1.4023l.0582-.0429a3 3 0 0 1 .1188-.0808 4 4 0 0 1 .4013-.2291c.3178-.1581.8183-.3546 1.3924-.3546 1.3194 0 2.389 1.0696 2.389 2.389 0 .7653-.3313 1.3531-.7329 1.7895-.306.3326-.6778.6036-1.0023.8215h.9851c.5523 0 1 .4477 1 1s-.4477 1-1 1h-3.25c-.5522 0-1-.4477-1-1 0-.7543.392-1.2989.7786-1.6676.3275-.3124.7422-.5818 1.0682-.7936l.106-.069c.3847-.2515.6574-.4442.8426-.6454.161-.175.2046-.301.2046-.4354a.389.389 0 0 0-.389-.389c-.1369 0-.317.0535-.5018.1454a2 2 0 0 0-.2499.1475"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(NumberedListFilledIcon);
export default ForwardRef;
