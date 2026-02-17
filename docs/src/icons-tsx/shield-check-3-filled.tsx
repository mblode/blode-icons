import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ShieldCheck3FilledIcon = (
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
      d="M12 22c4.9706 0 9-4.0294 9-9V7.962a4 4 0 0 0-2.3967-3.6646l-5-2.1875a4 4 0 0 0-3.2066 0l-5 2.1875A4 4 0 0 0 3 7.962V13c0 4.9706 4.0294 9 9 9m3.7071-11.2929c.3905-.3905.3905-1.0237 0-1.4142s-1.0237-.3905-1.4142 0L11 12.5858l-1.2929-1.2929c-.3905-.3905-1.0237-.3905-1.4142 0s-.3905 1.0237 0 1.4142l2 2c.3905.3905 1.0237.3905 1.4142 0z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(ShieldCheck3FilledIcon);
export default ForwardRef;
