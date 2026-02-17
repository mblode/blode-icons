import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const RewindIcon = (
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
      d="m11.861 12.7529 5.4814 4.7962c.6466.5658 1.6585.1066 1.6585-.7525V7.2041c0-.8592-1.0119-1.3183-1.6585-.7526l-5.4814 4.7963c-.4553.3984-.4553 1.1067 0 1.5051ZM3.861 12.7529l5.4814 4.7962c.6466.5658 1.6585.1066 1.6585-.7525V7.2041c0-.8592-1.0119-1.3183-1.6585-.7526L3.861 11.2478c-.4553.3984-.4553 1.1067 0 1.5051Z"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(RewindIcon);
export default ForwardRef;
