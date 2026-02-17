import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const OfflineFilledIcon = (
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
      d="M12 2c5.5228 0 10 4.4772 10 10s-4.4772 10-10 10S2 17.5228 2 12 6.4772 2 12 2m-.7578 7.4951a1.0003 1.0003 0 0 0-1.3184.1856l-3.4863 4.1201c-.3443.4072.1033.9989.5889.7783l3.2207-1.4639a.5.5 0 0 1 .4843.0391l2.0264 1.3506a1 1 0 0 0 1.3184-.1856l3.4863-4.1201c.3443-.4072-.1033-.9989-.5889-.7783l-3.2207 1.4639a.5.5 0 0 1-.4843-.0391z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(OfflineFilledIcon);
export default ForwardRef;
