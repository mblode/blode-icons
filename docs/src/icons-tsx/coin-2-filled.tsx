import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Coin2FilledIcon = (
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
      d="M12 22c5.5228 0 10-4.4772 10-10S17.5228 2 12 2 2 6.4772 2 12s4.4772 10 10 10M10.9393 9.0607l-1.8786 1.8786c-.5858.5858-.5858 1.5356 0 2.1214l1.8786 1.8786c.5858.5858 1.5356.5858 2.1214 0l1.8786-1.8786c.5858-.5858.5858-1.5356 0-2.1214l-1.8786-1.8786c-.5858-.5858-1.5356-.5858-2.1214 0"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(Coin2FilledIcon);
export default ForwardRef;
