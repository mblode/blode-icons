import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Coin2Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M21 12c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9Z"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
      style={{
        stroke: "currentColor",
        strokeOpacity: 1,
      }}
    />
    <path
      d="m9.207 11.2929 2.0857-2.0858c.3906-.3906 1.0237-.3906 1.4143 0l2.0857 2.0858c.3906.3905.3906 1.0237 0 1.4142l-2.0857 2.0858c-.3906.3905-1.0237.3905-1.4143 0L9.207 12.7071c-.3906-.3905-.3906-1.0237 0-1.4142Z"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={2}
      style={{
        stroke: "currentColor",
        strokeOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(Coin2Icon);
export default ForwardRef;
