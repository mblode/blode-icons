import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const InboxEmptyIcon = (
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
      d="M3 12h4.25a2.5 2.5 0 0 1 2 1 2.5 2.5 0 0 0 2 1h1.5a2.5 2.5 0 0 0 2-1 2.5 2.5 0 0 1 2-1H21m.6047-.6917-2.7409-4.7967A3 3 0 0 0 16.259 5H7.741a3 3 0 0 0-2.6048 1.5116l-2.741 4.7967A3 3 0 0 0 2 12.7967V16c0 1.6569 1.3432 3 3 3h14c1.6569 0 3-1.3431 3-3v-3.2033a3 3 0 0 0-.3953-1.4884"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(InboxEmptyIcon);
export default ForwardRef;
