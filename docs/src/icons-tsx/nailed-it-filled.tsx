import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const NailedItFilledIcon = (
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
      d="M3.7929 14.7929c.3905-.3905 1.0237-.3905 1.4142 0l.5.5c.3905.3905.3905 1.0237 0 1.4142s-1.0237.3905-1.4142 0l-.5-.5c-.3905-.3905-.3905-1.0237 0-1.4142M5.7929 18.7929c.3905-.3905 1.0237-.3905 1.4142 0l.5.5c.3905.3905.3905 1.0237 0 1.4142s-1.0237.3905-1.4142 0l-.5-.5c-.3905-.3905-.3905-1.0237 0-1.4142M18.2071 18.7929c-.3905-.3905-1.0237-.3905-1.4142 0l-.5.5c-.3905.3905-.3905 1.0237 0 1.4142s1.0237.3905 1.4142 0l.5-.5c.3905-.3905.3905-1.0237 0-1.4142M20.2071 14.7929c-.3905-.3905-1.0237-.3905-1.4142 0l-.5.5c-.3905.3905-.3905 1.0237 0 1.4142s1.0237.3905 1.4142 0l.5-.5c.3905-.3905.3905-1.0237 0-1.4142"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
    <path
      d="M6.9902 2c-.5522 0-1 .4477-1 1s.4478 1 1 1h1.01c1.1046 0 2 .8954 2 2v12.1178c0 .7403.2055 1.466.5934 2.0964l.9808 1.5938c.1953.3173.6564.3173.8517 0l.9808-1.5938a4 4 0 0 0 .5933-2.0964V6c0-1.1046.8955-2 2-2h1.01c.5523 0 1-.4477 1-1s-.4477-1-1-1z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(NailedItFilledIcon);
export default ForwardRef;
