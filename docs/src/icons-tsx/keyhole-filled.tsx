import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const KeyholeFilledIcon = (
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
      d="M12 22c5.5228 0 10-4.4772 10-10S17.5228 2 12 2 2 6.4772 2 12s4.4772 10 10 10m3-12c0 1.0038-.493 1.8924-1.25 2.437v2.813c0 .9665-.7835 1.75-1.75 1.75s-1.75-.7835-1.75-1.75v-2.813C9.493 11.8924 9 11.0038 9 10c0-1.6569 1.3431-3 3-3s3 1.3431 3 3"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(KeyholeFilledIcon);
export default ForwardRef;
