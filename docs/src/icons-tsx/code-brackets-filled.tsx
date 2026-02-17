import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const CodeBracketsFilledIcon = (
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
      d="M14.2426 3.0299c.5358.1339.8615.6768.7276 1.2126l-4 16.0001c-.134.5358-.6769.8615-1.2127.7276s-.8616-.6769-.7276-1.2127l4-16c.1339-.5358.6769-.8616 1.2127-.7276M6.7474 7.3357c.367.4127.3298 1.0448-.083 1.4117l-1.9775 1.7578c-.895.7956-.895 2.1941 0 2.9897l1.9775 1.7577c.4128.3669.45.999.083 1.4118s-.999.45-1.4117.083l-1.9775-1.7577c-1.79-1.5912-1.79-4.3881 0-5.9793l1.9775-1.7578c.4127-.3669 1.0448-.3297 1.4117.083m10.5052 0c.3669-.4128.999-.45 1.4118-.083l1.9775 1.7577c1.79 1.5912 1.79 4.3881 0 5.9793l-1.9775 1.7577c-.4128.367-1.0449.3298-1.4118-.083s-.3297-1.0449.0831-1.4118l1.9775-1.7577c.895-.7956.895-2.1941 0-2.9897l-1.9775-1.7578c-.4128-.3669-.45-.999-.0831-1.4117"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(CodeBracketsFilledIcon);
export default ForwardRef;
