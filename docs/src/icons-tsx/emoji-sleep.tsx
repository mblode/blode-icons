import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const EmojiSleepIcon = (
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
      d="M7.25 10.5s.4583.5 1.375.5S10 10.5 10 10.5m4 0s.4583.5 1.375.5 1.375-.5 1.375-.5m-6.75 5c1.3863.6667 2.6137.6667 4 0m7-3.5c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(EmojiSleepIcon);
export default ForwardRef;
