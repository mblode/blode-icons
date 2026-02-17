import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const WebflowIcon = (
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
      d="m24 4.8265-7.339 14.347H9.7676l3.0714-5.9461h-.1378C10.1673 16.5167 6.3867 18.6821 1 19.1735v-5.8637s3.446-.2036 5.4719-2.3334H1V4.8266h6.1498v5.058l.138-.0005 2.513-5.0575h4.651v5.026l.1379-.0002 2.6074-5.026z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(WebflowIcon);
export default ForwardRef;
