import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const BellCheckFilledIcon = (
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
      d="M3.7 9.3565C4.1483 5.1726 7.7922 2 12 2s7.8517 3.1726 8.3 7.3565l.5247 3.5604c.3559 2.4152-1.516 4.5831-3.9573 4.5831H7.1326c-2.4413 0-4.3131-2.1679-3.9572-4.5831zm11.5071.3506c.3905-.3905.3905-1.0237 0-1.4142s-1.0237-.3905-1.4142 0L11 11.0858l-.7929-.7929c-.3905-.3905-1.0237-.3905-1.4142 0s-.3905 1.0237 0 1.4142l1.5 1.5c.3905.3905 1.0237.3905 1.4142 0z"
      fill="currentColor"
      fillRule="evenodd"
    />
    <path
      d="M12 22c-2.0503 0-3.8124-1.2341-4.584-3h9.1679c-.7715 1.7659-2.5336 3-4.5839 3"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(BellCheckFilledIcon);
export default ForwardRef;
