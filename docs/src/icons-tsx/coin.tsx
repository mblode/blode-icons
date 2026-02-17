import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const CoinIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M14 21c3.866 0 7-4.0294 7-9s-3.134-9-7-9m0 18c-3.866 0-7-4.0294-7-9s3.134-9 7-9m0 18h-4c-3.866 0-7-4.0294-7-9s3.134-9 7-9h4"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(CoinIcon);
export default ForwardRef;
