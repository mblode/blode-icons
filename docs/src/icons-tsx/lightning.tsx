import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const LightningIcon = (
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
      d="m4.116 12.2764 4.5-9A.5.5 0 0 1 9.0631 3h8.0578c.3887 0 .6287.424.4288.7573l-2.0913 3.4855c-.2.3332.0401.7572.4287.7572h4.8037c.4596 0 .6757.5678.3326.8734L7.3812 21.0236c-.3809.3392-.9655-.0426-.8082-.5277l2.219-6.8416C8.8966 13.3312 8.6558 13 8.3162 13H4.5631c-.3717 0-.6134-.3912-.4472-.7236"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(LightningIcon);
export default ForwardRef;
