import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Cursor3Icon = (
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
      d="M18.0589 8.4362 5.8181 3.8897c-1.2031-.447-2.3753.7253-1.9285 1.9284l4.5466 12.2408c.3806 1.0245 1.694 1.3112 2.4668.5383l1.4936-1.4935a.5.5 0 0 1 .7071 0l3.6893 3.6893c.3905.3905 1.0237.3905 1.4142 0l2.5858-2.5858c.3905-.3905.3905-1.0237 0-1.4142l-3.6893-3.6893a.5.5 0 0 1 0-.7071l1.4935-1.4936c.7729-.7728.4862-2.0862-.5383-2.4668"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(Cursor3Icon);
export default ForwardRef;
