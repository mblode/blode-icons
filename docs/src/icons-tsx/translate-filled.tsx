import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const TranslateFilledIcon = (
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
      d="M8.0003 3c.5523 0 1 .4477 1 1v1h3c.5522 0 1 .4477 1 1s-.4478 1-1 1h-.6276c-.3124 1.9117-.9287 3.5244-1.9352 4.8188.7509.5249 1.6738.9283 2.8053 1.2111.5358.134.8616.6769.7276 1.2127-.1339.5358-.6768.8616-1.2126.7276-1.4609-.3652-2.7168-.9278-3.7576-1.7252-1.0408.7974-2.2967 1.3599-3.7574 1.7251-.5358.134-1.0788-.1918-1.2127-.7276-.134-.5358.1918-1.0787.7276-1.2126 1.1315-.2829 2.0544-.6863 2.8053-1.2111C5.5565 10.5244 4.9402 8.9116 4.6278 7h-.6275c-.5523 0-1-.4477-1-1s.4477-1 1-1h3V4c0-.5523.4477-1 1-1m-1.342 4c.266 1.4142.7157 2.5272 1.342 3.4013.6262-.8741 1.076-1.987 1.342-3.4013zm8.4987 4.3008c.6871-1.6319 2.9994-1.6318 3.6865 0l3.0784 7.3111c.2143.509-.0246 1.0954-.5336 1.3097s-1.0954-.0246-1.3097-.5336L19.4942 18h-4.9879l-.5844 1.388c-.2143.509-.8007.7479-1.3097.5336s-.7479-.8007-.5336-1.3097zM15.3484 16h3.3037l-1.6518-3.9231z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(TranslateFilledIcon);
export default ForwardRef;
