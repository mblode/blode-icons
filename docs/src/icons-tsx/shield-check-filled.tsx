import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ShieldCheckFilledIcon = (
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
      d="M10.6997 2.3891a4 4 0 0 1 2.6006 0L18.9752 4.34A3 3 0 0 1 21 7.1769v4.735c0 2.8068-1.1489 4.8295-2.8125 6.4044-1.5724 1.4887-3.6323 2.5995-5.5556 3.6366l-.1571.0847a1 1 0 0 1-.9496 0l-.1571-.0847c-1.9233-1.0371-3.9832-2.1479-5.5556-3.6366C4.1489 16.7414 3 14.7187 3 11.9119v-4.735A3 3 0 0 1 5.0248 4.34zm4.5074 8.068c.3905-.3905.3905-1.0237 0-1.4142s-1.0237-.3905-1.4142 0L11 11.8358l-.7929-.7929c-.3905-.3905-1.0237-.3905-1.4142 0s-.3905 1.0237 0 1.4142l1.5 1.5a1 1 0 0 0 1.4142 0z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(ShieldCheckFilledIcon);
export default ForwardRef;
