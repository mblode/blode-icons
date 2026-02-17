import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const AnimationEaseInFilledIcon = (
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
      d="M20.2123 3.0227c.5397.1172.8823.6497.7652 1.1894-1.0127 4.6654-2.819 8.3646-5.6098 11.1554s-6.49 4.5971-11.1554 5.6097c-.5397.1172-1.0722-.2254-1.1893-.7651-.1172-.5397.2254-1.0722.7651-1.1894 4.3957-.9541 7.7132-2.6172 10.1654-5.0694 2.4522-2.4523 4.1154-5.7697 5.0695-10.1654.1171-.5398.6496-.8823 1.1893-.7652"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(AnimationEaseInFilledIcon);
export default ForwardRef;
