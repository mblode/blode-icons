import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const AnimationLinearFilledIcon = (
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
      d="M20.7071 3.2929c.3905.3905.3905 1.0237 0 1.4142l-16 16c-.3905.3905-1.0237.3905-1.4142 0s-.3905-1.0237 0-1.4142l16-16c.3905-.3905 1.0237-.3905 1.4142 0"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(AnimationLinearFilledIcon);
export default ForwardRef;
