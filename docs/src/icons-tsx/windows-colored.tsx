import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const WindowsColoredIcon = (
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
    <path d="M12.75 12.75h7.5v7.5h-7.5z" fill="#FEBA08" />
    <path d="M3.75 12.75h7.5v7.5h-7.5z" fill="#05A6F0" />
    <path d="M12.75 3.75h7.5v7.5h-7.5z" fill="#80BC06" />
    <path d="M3.75 3.75h7.5v7.5h-7.5z" fill="#F25325" />
  </svg>
);
const ForwardRef = forwardRef(WindowsColoredIcon);
export default ForwardRef;
