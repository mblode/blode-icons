import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const BackFilledIcon = (
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
      d="M4 5c0-.5523.4477-1 1-1s1 .4477 1 1v14c0 .5523-.4477 1-1 1s-1-.4477-1-1zM16.0432 4.4523C17.6734 3.3241 20 4.4322 20 6.4811v11.0378c0 2.0489-2.3266 3.1571-3.9568 2.0288l-7.9738-5.519c-1.4259-.9868-1.4259-3.0706 0-4.0574z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(BackFilledIcon);
export default ForwardRef;
