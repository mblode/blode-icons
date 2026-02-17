import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const FolderAddLeftFilledIcon = (
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
      d="M6 3C3.7909 3 2 4.7909 2 7v7c0-1.6569 1.3432-3 3-3s3 1.3431 3 3c1.6569 0 3 1.3431 3 3s-1.3431 3-3 3h10c2.2091 0 4-1.7909 4-4v-6c0-2.2091-1.7909-4-4-4h-4.9296a1 1 0 0 1-.8321-.4453l-.8125-1.2188A3 3 0 0 0 8.9296 3z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
    <path
      d="M6 14c0-.5523-.4477-1-1-1s-1 .4477-1 1v2H2c-.5523 0-1 .4477-1 1s.4477 1 1 1h2v2c0 .5523.4477 1 1 1s1-.4477 1-1v-2h2c.5523 0 1-.4477 1-1s-.4477-1-1-1H6z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(FolderAddLeftFilledIcon);
export default ForwardRef;
