import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const SidebarWideLeftArrowFilledIcon = (
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
      d="M7 4H6C3.7909 4 2 5.7909 2 8v8c0 2.2091 1.7909 4 4 4h1z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
    <path
      clipRule="evenodd"
      d="M9 20h9c2.2091 0 4-1.7909 4-4V8c0-2.2091-1.7909-4-4-4H9zm7.7071-10.7071c.3905.3905.3905 1.0237 0 1.4142L15.4142 12l1.2929 1.2929c.3905.3905.3905 1.0237 0 1.4142s-1.0237.3905-1.4142 0l-2-2c-.3905-.3905-.3905-1.0237 0-1.4142l2-2c.3905-.3905 1.0237-.3905 1.4142 0"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SidebarWideLeftArrowFilledIcon);
export default ForwardRef;
