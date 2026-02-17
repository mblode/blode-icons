import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const QuickSearchIcon = (
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
      d="m18 17 3 3M4.062 10c.4921-3.9463 3.8585-7 7.9381-7 4.4183 0 8 3.5817 8 8 0 4.0797-3.0537 7.4461-7.0001 7.9381"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
    />
    <path
      d="m3.7075 16.1746 4.2105-4.9123c.3226-.3763.9373-.1044.8758.3874L8.5 14h2.4129c.4272 0 .6576.5011.3796.8254L7.082 19.7377c-.3226.3763-.9373.1044-.8758-.3874L6.5 17H4.0871c-.4272 0-.6576-.5011-.3796-.8254"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(QuickSearchIcon);
export default ForwardRef;
