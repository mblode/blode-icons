import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const AnimationEaseOutFilledIcon = (
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
      d="M20.9775 3.7879c.1171.5397-.2255 1.0722-.7652 1.1893-4.3957.9541-7.7132 2.6173-10.1654 5.0695s-4.1153 5.7697-5.0695 10.1654c-.117.5397-.6496.8823-1.1893.7651s-.8823-.6496-.7651-1.1893c1.0126-4.6655 2.8189-8.3646 5.6097-11.1554s6.4899-4.5971 11.1554-5.6098c.5397-.1171 1.0722.2254 1.1894.7652"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(AnimationEaseOutFilledIcon);
export default ForwardRef;
