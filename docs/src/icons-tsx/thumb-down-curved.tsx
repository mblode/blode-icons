import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ThumbDownCurvedIcon = (
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
      d="m10.5475 20.9433.4537.0567c.9646-2.3088 2.406-4.3034 4.1068-6.0975.5584-.5891.8932-1.3606.8932-2.1723V6.2749c0-.7776-.447-1.4963-1.1777-1.7624-2.4796-.903-5.0734-1.096-7.6955-.8688-1.6012.1387-2.856 1.3753-3.2088 2.9434l-.8448 3.7544c-.422 1.8756 1.0044 3.6586 2.9268 3.6586h3l-.949 3.0841c-.5483 1.7823.645 3.6278 2.4953 3.8591Z"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
      d="M21 12c0 1.1046-.8954 2-2 2-1.6569 0-3-1.3431-3-3V7c0-1.6569 1.3431-3 3-3 1.1046 0 2 .8954 2 2z"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(ThumbDownCurvedIcon);
export default ForwardRef;
