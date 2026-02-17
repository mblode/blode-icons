import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const FolderPaperFilledIcon = (
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
      d="M3 6c0-1.6569 1.3431-3 3-3h8c1.3062 0 2.4175.8348 2.8293 2H18c1.6569 0 3 1.3431 3 3v2.267c.6.3462 1.0039.9944 1.0039 1.7369V17c0 2.2091-1.7909 4-4 4h-12c-2.2091 0-4-1.7909-4-4V8.996c0-.738.4005-1.3824.9961-1.7278zm2 1h2.7613a4 4 0 0 1 2.8284 1.1716l1.2426 1.2426A2 2 0 0 0 13.2465 10H15V6c0-.5523-.4477-1-1-1H6c-.5523 0-1 .4477-1 1zm12 0v3h2V8c0-.5523-.4477-1-1-1z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(FolderPaperFilledIcon);
export default ForwardRef;
