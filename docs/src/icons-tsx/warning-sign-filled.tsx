import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const WarningSignFilledIcon = (
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
      d="M14.6579 3c1.8355 0 3.4354 1.2492 3.8806 3.0299l3.4319 13.7276c.1339.5358-.1918 1.0787-.7276 1.2126-.5358.134-1.0788-.1918-1.2127-.7276L19.4695 18H14.531l-.5606 2.2425c-.134.5358-.6769.8616-1.2127.7276-.5358-.1339-.8616-.6768-.7276-1.2126L12.4695 18H4.531l-.5606 2.2425c-.134.5358-.6769.8616-1.2127.7276-.5358-.1339-.8615-.6768-.7276-1.2126L5.462 6.0299c.3894-1.5575 1.6622-2.7084 3.2033-2.9724A1 1 0 0 1 9.0003 3zm2.3423 5.1231L15.031 16h3.9385z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(WarningSignFilledIcon);
export default ForwardRef;
