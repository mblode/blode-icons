import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const DiamondShineFilledIcon = (
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
      d="M13.0007 3c0-.5523-.4477-1-1-1s-1 .4477-1 1v1c0 .5523.4477 1 1 1s1-.4477 1-1zM4.3438 3.9289c-.3905-.3905-1.0237-.3905-1.4142 0s-.3905 1.0237 0 1.4142l.7071.7071c.3905.3905 1.0237.3905 1.4142 0 .3906-.3905.3906-1.0237 0-1.4142zM21.0719 5.343c.3905-.3904.3905-1.0236 0-1.4141s-1.0237-.3905-1.4143 0l-.7071.707c-.3905.3906-.3905 1.0238 0 1.4143s1.0237.3905 1.4142 0zM8.8293 7a3 3 0 0 0-2.1213.8787l-2.98 2.9799A2.99 2.99 0 0 0 3.0133 12h17.9754a2.986 2.986 0 0 0-.7149-1.1414l-2.9799-2.98A3 3 0 0 0 15.1725 7zM3.7582 15.1309A2.99 2.99 0 0 1 3.0274 14h17.9471a2.99 2.99 0 0 1-.7308 1.1309l-6.1516 5.9807c-1.1643 1.132-3.0181 1.132-4.1824 0z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(DiamondShineFilledIcon);
export default ForwardRef;
