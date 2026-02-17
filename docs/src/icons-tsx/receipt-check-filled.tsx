import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ReceiptCheckFilledIcon = (
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
      d="M8 2C5.7909 2 4 3.7909 4 6v13.3884c0 1.1517 1.2442 1.8738 2.2442 1.3024l2.2873-1.307 2.5741 1.287a2 2 0 0 0 1.7888 0l2.5741-1.287 2.2873 1.307c1 .5714 2.2442-.1507 2.2442-1.3024V6c0-2.2091-1.7909-4-4-4zm1 12c0-.5523.4477-1 1-1h4c.5523 0 1 .4477 1 1s-.4477 1-1 1h-4c-.5523 0-1-.4477-1-1m5.4571-5.7429c.3905-.3905.3905-1.0237 0-1.4142s-1.0237-.3905-1.4142 0L11.3 8.5858l-.3429-.343c-.3905-.3904-1.0237-.3904-1.4142 0-.3905.3906-.3905 1.0238 0 1.4143l1.05 1.05a1 1 0 0 0 1.4142 0z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(ReceiptCheckFilledIcon);
export default ForwardRef;
