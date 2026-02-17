import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const SocialIcon = (
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
      d="M8 6c0 1.1046-.8954 2-2 2s-2-.8954-2-2 .8954-2 2-2 2 .8954 2 2ZM20 6c0 1.1046-.8954 2-2 2s-2-.8954-2-2 .8954-2 2-2 2 .8954 2 2ZM20 17c0 1.1046-.8954 2-2 2s-2-.8954-2-2 .8954-2 2-2 2 .8954 2 2ZM11 16c0 2.2091-1.7909 4-4 4s-4-1.7909-4-4 1.7909-4 4-4 4 1.7909 4 4ZM6.5992 12l-.4-4m3.8 5.2727 6.7496-6.136m-5.7496 9.2269 5 .4546"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(SocialIcon);
export default ForwardRef;
