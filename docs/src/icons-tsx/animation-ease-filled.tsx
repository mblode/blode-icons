import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const AnimationEaseFilledIcon = (
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
      d="M20.9982 3.9389c.0337.5512-.3857 1.0255-.937 1.0593-3.4329.2103-4.9879 1.1953-5.7975 2.3307-.8697 1.2196-1.063 2.8251-1.2692 4.7763l-.0124.1178c-.1902 1.8032-.4135 3.9211-1.6173 5.6094-1.2903 1.8095-3.5355 2.9348-7.3036 3.1658-.5513.0337-1.0255-.3857-1.0593-.937-.0338-.5512.3857-1.0255.937-1.0593 3.4328-.2104 4.9879-1.1953 5.7975-2.3307.8697-1.2196 1.0629-2.8251 1.2692-4.7763l.0124-.1178c.1901-1.8032.4134-3.9212 1.6173-5.6094 1.2902-1.8095 3.5354-2.9349 7.3036-3.1658.5512-.0338 1.0255.3857 1.0593.937"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(AnimationEaseFilledIcon);
export default ForwardRef;
