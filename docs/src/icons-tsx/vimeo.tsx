import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const VimeoIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M21.9669 9.805c-2.2385 4.7823-7.6423 11.2924-11.0578 11.2924-3.366 0-3.8527-7.1784-5.6906-11.956C4.3137 6.79 3.7298 7.33 2.034 8.517L1 7.1834c2.4732-2.1744 4.9482-4.6998 6.4689-4.84 1.7123-.1641 2.7665 1.0065 3.1607 3.5126.5206 3.2936 1.2484 8.4058 2.5189 8.4058.99 0 3.4293-4.0553 3.5549-5.5054.2227-2.123-1.5611-2.1872-3.1094-1.5244C16.0443-.7925 26.2376.685 21.9669 9.805"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(VimeoIcon);
export default ForwardRef;
