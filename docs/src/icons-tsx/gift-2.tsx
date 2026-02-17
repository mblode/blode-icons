import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Gift2Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M12 4v16m-8-8h16M8 16c1.6482-1.0637 2.9156-2.3626 4-4m0 0c1.0844 1.6374 2.3518 2.9363 4 4m-4-4v-1.3333M12 12h-1.3333C9.1939 12 8 10.8061 8 9.3333 8 8.597 8.597 8 9.3333 8 10.8061 8 12 9.194 12 10.6667M12 12h1.3333C14.8061 12 16 10.8061 16 9.3333 16 8.597 15.403 8 14.6667 8 13.1939 8 12 9.194 12 10.6667M7 20h10c1.6569 0 3-1.3431 3-3V7c0-1.6569-1.3431-3-3-3H7C5.3431 4 4 5.3431 4 7v10c0 1.6569 1.3431 3 3 3"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(Gift2Icon);
export default ForwardRef;
