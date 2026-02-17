import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const HammerIcon = (
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
      d="M6.707 14.7929c-.3906.3905-1.0237.3905-1.4143 0L2.457 11.9571c-.3906-.3905-.3906-1.0237 0-1.4142l7.25-7.25A1 1 0 0 1 10.414 3h3.6717c.2652 0 .5195.1054.7071.2929l.9999 1c.3905.3905.3905 1.0237 0 1.4142zM9.5 12.5l6.8358 6.8358c.781.781 2.0474.781 2.8284 0l.1716-.1716c.781-.781.781-2.0474 0-2.8284L12.5 9.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      style={{
        stroke: "currentColor",
        strokeOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(HammerIcon);
export default ForwardRef;
