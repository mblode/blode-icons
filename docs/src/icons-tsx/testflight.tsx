import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const TestflightIcon = (
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
      d="m10.9999 9.5-.7356-5.5175C10.1243 2.9327 10.9409 2 11.9999 2s1.8757.9327 1.7357 1.9825L12.9999 9.5m-2.665 4.6159-4.4105 3.3959c-.8391.6461-2.0552.4052-2.5847-.5119s-.13-2.0907.849-2.4944l5.1462-2.1216m5.3301-.0001 5.1462 2.1217c.9791.4037 1.3785 1.5772.849 2.4944-.5295.9171-1.7456 1.158-2.5847.5119l-4.4105-3.3959M9 20.4879c.9383.3317 1.948.5121 2.9999.5121 1.052 0 2.0617-.1804 3-.5121M6.1494 5.1581C5.393 5.8049 4.7318 6.589 4.2059 7.5s-.8746 1.8757-1.0565 2.8541m17.7011-.0001C20.6686 9.3757 20.32 8.4109 19.794 7.5c-.5259-.911-1.1871-1.6952-1.9435-2.342M14.4999 12c0 1.3807-1.1192 2.5-2.5 2.5s-2.5-1.1193-2.5-2.5 1.1193-2.5 2.5-2.5 2.5 1.1193 2.5 2.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(TestflightIcon);
export default ForwardRef;
