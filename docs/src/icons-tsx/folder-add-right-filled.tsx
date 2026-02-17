import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const FolderAddRightFilledIcon = (
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
      d="M18 13c.5523 0 1 .4477 1 1v2h2c.5523 0 1 .4477 1 1s-.4477 1-1 1h-2v2c0 .5523-.4477 1-1 1s-1-.4477-1-1v-2h-2c-.5523 0-1-.4477-1-1s.4477-1 1-1h2v-2c0-.5523.4477-1 1-1"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
    <path
      d="M8.7324 3c1.1263 0 2.178.5629 2.8028 1.5A3.369 3.369 0 0 0 14.338 6H18c2.2091 0 4 1.7909 4 4v2.5278C20.9385 11.5777 19.5367 11 18 11c-3.3137 0-6 2.6863-6 6 0 1.0929.2922 2.1175.8027 3H6c-2.2091 0-4-1.7909-4-4V7c0-2.2091 1.7909-4 4-4z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(FolderAddRightFilledIcon);
export default ForwardRef;
