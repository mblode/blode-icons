import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Podcast1Icon = (
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
      d="m12.5486 21.0025.3507-3.5075c.0533-.5327-.3651-.995-.9005-.995s-.9537.4623-.9005.995l.3508 3.5075a.5525.5525 0 0 0 1.0995 0ZM13 12c0 .5523-.4477 1-1 1s-1-.4477-1-1 .4477-1 1-1 1 .4477 1 1Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M16.9767 19.5C19.4017 17.8876 21 15.1305 21 12c0-4.9706-4.0294-9-9-9s-9 4.0294-9 9c0 3.1305 1.5983 5.8876 4.0233 7.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
    />
    <path
      d="M8 15.0005A4.978 4.978 0 0 1 7 12c0-2.7614 2.2386-5 5-5s5 2.2386 5 5a4.978 4.978 0 0 1-1 3.0005"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(Podcast1Icon);
export default ForwardRef;
