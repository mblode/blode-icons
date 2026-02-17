import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const RunShortcutFilledIcon = (
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
      d="M7 3C4.7909 3 3 4.7909 3 7v10c0 2.2091 1.7909 4 4 4h10c2.2091 0 4-1.7909 4-4V7c0-2.2091-1.7909-4-4-4zm7.8944 5.4472c.247-.494.0468-1.0946-.4472-1.3416s-1.0946-.0468-1.3416.4472l-4 8c-.247.494-.0468 1.0946.4472 1.3416s1.0946.0468 1.3416-.4472z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(RunShortcutFilledIcon);
export default ForwardRef;
