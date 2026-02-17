import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ArrowExpandVerFilledIcon = (
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
      d="M12 1a1 1 0 0 1 .7071.2929l4 4c.3905.3905.3905 1.0237 0 1.4142s-1.0237.3905-1.4142 0L13 4.4142v15.1716l2.2929-2.2929c.3905-.3905 1.0237-.3905 1.4142 0s.3905 1.0237 0 1.4142l-4 4a1 1 0 0 1-1.4142 0l-4-4c-.3905-.3905-.3905-1.0237 0-1.4142s1.0237-.3905 1.4142 0L11 19.5858V4.4142l-2.2929 2.293c-.3905.3904-1.0237.3904-1.4142 0-.3905-.3906-.3905-1.0238 0-1.4143l4-4A1 1 0 0 1 12 1"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowExpandVerFilledIcon);
export default ForwardRef;
