import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ThinkingBubbleIcon = (
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
    <circle cx={5} cy={19} r={2} stroke="currentColor" strokeWidth={2} />
    <path
      d="M15.4466 4.2635c.3199.4499.8666.757 1.4183.7387A4 4 0 0 1 17 5c2.2091 0 4 1.7909 4 4 0 1.4878-.8123 2.786-2.0177 3.475a1.37 1.37 0 0 0-.5073.5073C17.786 14.1877 16.4878 15 15 15a4 4 0 0 1-1.2315-.1932c-.5888-.1903-1.2978.0036-1.7567.4187A2.99 2.99 0 0 1 10 16c-1.6569 0-3-1.3431-3-3 0-.3075-.14-.606-.3866-.7897C5.6342 11.4812 5 10.3147 5 9c0-2.2091 1.7909-4 4-4q.0678 0 .135.0022c.5518.0183 1.0985-.2888 1.4184-.7387C11.0971 3.4988 11.9903 3 13 3s1.9029.4988 2.4466 1.2635Z"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(ThinkingBubbleIcon);
export default ForwardRef;
