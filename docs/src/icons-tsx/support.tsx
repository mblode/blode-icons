import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const SupportIcon = (
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
      d="M6 10h1c0-.5523-.4477-1-1-1zm0 6.5v1c.5523 0 1-.4477 1-1zM18.5 10V9c-.5523 0-1 .4477-1 1zm0 6.5h-1c0 .5523.4477 1 1 1zM13 19c0-.5523-.4477-1-1-1s-1 .4477-1 1zm7.75-2.5c0-.5523-.4477-1-1-1s-1 .4477-1 1zM4.5 11H6V9H4.5zm.5-1v6.5h2V10zm1 5.5H4.5v2H6zM4 15v-3.5H2V15zm.5.5A.5.5 0 0 1 4 15H2c0 1.3807 1.1193 2.5 2.5 2.5zm0-6.5C3.1193 9 2 10.1193 2 11.5h2a.5.5 0 0 1 .5-.5zm14 2H20V9h-1.5zm2 .5V15h2v-3.5zm-.5 4h-1.5v2H20zm-.5 1V10h-2v6.5zm1-1.5a.5.5 0 0 1-.5.5v2c1.3807 0 2.5-1.1193 2.5-2.5zm-.5-4a.5.5 0 0 1 .5.5h2c0-1.3807-1.1193-2.5-2.5-2.5zM6 9.75C6 6.6405 8.7297 4 12.25 4V2C7.7622 2 4 5.4037 4 9.75zM12.25 4c3.5203 0 6.25 2.6405 6.25 5.75h2C20.5 5.4037 16.7378 2 12.25 2zM4 9.75V10h2v-.25zm14.5 0V10h2v-.25zM15.25 20H13.5v2h1.75zM13 19.5V19h-2v.5zm5.75-3c0 1.933-1.567 3.5-3.5 3.5v2c3.0376 0 5.5-2.4624 5.5-5.5zM13.5 20a.5.5 0 0 1-.5-.5h-2c0 1.3807 1.1193 2.5 2.5 2.5z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(SupportIcon);
export default ForwardRef;
