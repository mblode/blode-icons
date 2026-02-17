import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const AnimationFilledIcon = (
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
      d="M8.7071 15.2929c.3905.3905.3905 1.0237 0 1.4142l-5 5c-.3905.3905-1.0237.3905-1.4142 0s-.3905-1.0237 0-1.4142l5-5c.3905-.3905 1.0237-.3905 1.4142 0M13.2071 17.7929c.3905.3905.3905 1.0237 0 1.4142l-2.5 2.5c-.3905.3905-1.0237.3905-1.4142 0s-.3905-1.0237 0-1.4142l2.5-2.5c.3905-.3905 1.0237-.3905 1.4142 0M6.2071 10.7929c.3905.3905.3905 1.0237 0 1.4142l-2.5 2.5c-.3905.3905-1.0237.3905-1.4142 0s-.3905-1.0237 0-1.4142l2.5-2.5c.3905-.3905 1.0237-.3905 1.4142 0"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
    <path
      d="M15 2c-3.866 0-7 3.134-7 7s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(AnimationFilledIcon);
export default ForwardRef;
