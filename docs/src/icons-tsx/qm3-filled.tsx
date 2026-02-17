import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Qm3FilledIcon = (
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
      d="M8.2929 3.2929c.3905-.3905 1.0237-.3905 1.4142 0l3 3c.3905.3905.3905 1.0237 0 1.4142s-1.0237.3905-1.4142 0L10 6.4142V14h10c.5523 0 1 .4477 1 1s-.4477 1-1 1H9.4142l-4.707 4.7071c-.3906.3905-1.0238.3905-1.4143 0s-.3905-1.0237 0-1.4142L8 14.5858V6.4142l-1.2929 1.293c-.3905.3904-1.0237.3904-1.4142 0-.3905-.3906-.3905-1.0238 0-1.4143z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(Qm3FilledIcon);
export default ForwardRef;
