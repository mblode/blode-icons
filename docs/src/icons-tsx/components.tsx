import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ComponentsIcon = (
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
      d="m9.207 5.0427 2.0857-2.0857c.3906-.3906 1.0237-.3906 1.4143 0l2.0857 2.0857c.3906.3906.3906 1.0237 0 1.4143L12.707 8.5427c-.3906.3906-1.0237.3906-1.4143 0L9.207 6.457c-.3906-.3906-.3906-1.0237 0-1.4143ZM2.957 11.2927 5.0427 9.207c.3906-.3906 1.0237-.3906 1.4143 0l2.0857 2.0857c.3906.3906.3906 1.0237 0 1.4143L6.457 14.7927c-.3906.3906-1.0237.3906-1.4143 0L2.957 12.707c-.3906-.3906-.3906-1.0237 0-1.4143ZM15.457 11.2927l2.0857-2.0857c.3906-.3906 1.0237-.3906 1.4143 0l2.0857 2.0857c.3906.3906.3906 1.0237 0 1.4143l-2.0857 2.0857c-.3906.3906-1.0237.3906-1.4143 0L15.457 12.707c-.3906-.3906-.3906-1.0237 0-1.4143ZM9.207 17.5427l2.0857-2.0857c.3906-.3906 1.0237-.3906 1.4143 0l2.0857 2.0857c.3906.3906.3906 1.0237 0 1.4143l-2.0857 2.0857c-.3906.3906-1.0237.3906-1.4143 0L9.207 18.957c-.3906-.3906-.3906-1.0237 0-1.4143Z"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
      style={{
        stroke: "currentColor",
        strokeOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(ComponentsIcon);
export default ForwardRef;
