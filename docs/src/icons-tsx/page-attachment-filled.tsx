import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const PageAttachmentFilledIcon = (
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
      d="M7 4.5a.5.5 0 0 1 1 0V9c0 1.1046-.8954 2-2 2s-2-.8954-2-2V5c0-.5523-.4477-1-1-1s-1 .4477-1 1v4c0 2.2091 1.7909 4 4 4s4-1.7909 4-4V4.5C10 3.1193 8.8807 2 7.5 2S5 3.1193 5 4.5V9c0 .5523.4477 1 1 1s1-.4477 1-1z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
    <path
      d="M6 15a5.99 5.99 0 0 1-2-.3414V18c0 2.2091 1.7909 4 4 4h8c2.2091 0 4-1.7909 4-4V6c0-2.2091-1.7909-4-4-4h-4.7578c.4787.715.7578 1.575.7578 2.5V9c0 3.3137-2.6863 6-6 6"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(PageAttachmentFilledIcon);
export default ForwardRef;
