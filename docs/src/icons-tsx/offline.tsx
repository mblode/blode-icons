import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const OfflineIcon = (
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
      d="M21 12c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="m13.2691 10.8458-2.0267-1.3512a1 1 0 0 0-1.3181.1862l-3.4861 4.1199c-.3447.4073.1028.9989.5885.7782l3.2206-1.4639a.5.5 0 0 1 .4843.0391l2.0267 1.3512a1 1 0 0 0 1.3181-.1861l3.4861-4.12c.3446-.4073-.1029-.999-.5886-.7781l-3.2206 1.4639a.5.5 0 0 1-.4842-.0392"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(OfflineIcon);
export default ForwardRef;
