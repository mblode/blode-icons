import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const BubblesFilledIcon = (
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
      d="M18.502 3c1.9329 0 3.5 1.567 3.5 3.5v5c0 1.933-1.5671 3.5-3.5 3.5h-.5v.5c0 1.933-1.5671 3.5-3.5 3.5h-3.7409l-4.2735 2.3742A1 1 0 0 1 5.002 20.5v-1.5354c-1.6962-.2427-3-1.7014-3-3.4646v-5c0-1.933 1.567-3.5 3.5-3.5h.5v-.5c0-1.933 1.567-3.5 3.5-3.5zm-10.5 4h6.5c1.9329 0 3.5 1.567 3.5 3.5V13h.5c.8284 0 1.5-.6716 1.5-1.5v-5c0-.8284-.6716-1.5-1.5-1.5h-9c-.8285 0-1.5.6716-1.5 1.5z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(BubblesFilledIcon);
export default ForwardRef;
