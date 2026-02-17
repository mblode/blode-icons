import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ScriptFilledIcon = (
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
      d="M22 7.0002C22 8.657 20.6568 10 19 10h-1v8.0016c0 1.6452-1.3263 2.9816-2.9676 2.9979A1 1 0 0 1 15 21H6.0329a3.033 3.033 0 0 1-2.1446-.8881A3.032 3.032 0 0 1 3 17.9675C3 16.3282 4.3297 15 5.9682 15H6V5.9964c0-.7951.316-1.558.8799-2.1202A3 3 0 0 1 9.0003 3H19a3 3 0 0 1 3 3zm-2 0C20 7.5523 19.5524 8 19 8h-1V6a1 1 0 0 1 2 0zM5.3022 18.6975c.1938.1937.4566.3025.7307.3025h6.1375A2.99 2.99 0 0 1 12 18.002c-.0002-.553-.4494-1.002-1.0006-1.002H5.9682C5.4334 17 5 17.4336 5 17.9675c0 .2739.1088.5366.3022.73M10 8c0-.5523.4477-1 1-1h2c.5523 0 1 .4477 1 1s-.4477 1-1 1h-2c-.5523 0-1-.4477-1-1m0 4c0-.5523.4477-1 1-1h1c.5523 0 1 .4477 1 1s-.4477 1-1 1h-1c-.5523 0-1-.4477-1-1"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(ScriptFilledIcon);
export default ForwardRef;
