import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const VkontakteFilledIcon = (
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
      d="M12.9824 19C5.4659 19 1.1786 13.7447 1 5h3.7652c.1236 6.4184 2.8993 9.1371 5.098 9.6977V5h3.5454v5.5355C15.5797 10.2973 17.8605 7.7748 18.63 5h3.5454c-.5909 3.4194-3.0644 5.9419-4.8233 6.979C19.111 12.8198 21.9282 15.02 23 19h-3.9027c-.8382-2.6627-2.9267-4.7227-5.6887-5.003V19z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(VkontakteFilledIcon);
export default ForwardRef;
