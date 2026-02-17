import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const PageSearchLinesFilledIcon = (
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
      d="M3 6c0-2.2091 1.7909-4 4-4h9c2.2091 0 4 1.7909 4 4v6.8021c-2.2946-1.3262-5.2795-1.0078-7.2426.9553-2.2639 2.2639-2.3405 5.8868-.2298 8.2426H7c-2.2091 0-4-1.7909-4-4zm4 1c0-.5523.4477-1 1-1h7c.5523 0 1 .4477 1 1s-.4477 1-1 1H8c-.5523 0-1-.4477-1-1m0 4c0-.5523.4477-1 1-1h3c.5523 0 1 .4477 1 1s-.4477 1-1 1H8c-.5523 0-1-.4477-1-1m0 4c0-.5523.4477-1 1-1h1c.5523 0 1 .4477 1 1s-.4477 1-1 1H8c-.5523 0-1-.4477-1-1"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
    <path
      clipRule="evenodd"
      d="M19.8284 15.1716c-1.5621-1.5621-4.0947-1.5621-5.6568 0s-1.5621 4.0947 0 5.6568c1.3179 1.318 3.3267 1.524 4.8606.618l1.2607 1.2607c.3905.3905 1.0237.3905 1.4142 0s.3905-1.0237 0-1.4142l-1.2607-1.2607c.906-1.5339.7-3.5427-.618-4.8606m-4.2426 1.4142c.781-.7811 2.0474-.7811 2.8284 0 .7811.781.7811 2.0474 0 2.8284-.781.7811-2.0474.7811-2.8284 0-.7811-.781-.7811-2.0474 0-2.8284"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(PageSearchLinesFilledIcon);
export default ForwardRef;
