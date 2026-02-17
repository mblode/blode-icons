import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const StickerFilledIcon = (
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
      d="M2 12C2 6.4772 6.4772 2 12 2c.9694 0 1.8128.4535 2.4156 1.0564l6.528 6.528C21.5465 10.1872 22 11.0306 22 12c0 5.5228-4.4772 10-10 10S2 17.5228 2 12m18 0c-5.5 1-9-2.5-8-8z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(StickerFilledIcon);
export default ForwardRef;
