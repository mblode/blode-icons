import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Car3EvFilledIcon = (
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
      clipRule="evenodd"
      d="M2.895 6.0912C4.1162 4.7347 5.8193 4 7.712 4H12a5 5 0 0 1 4 2l1.4807 1.9743a.393.393 0 0 0 .2372.1495C20.7892 8.738 23 11.4348 23 14.5669v.2361c0 1.6404-1.2355 2.9923-2.8268 3.1758C19.6158 19.1727 18.4045 20 17 20c-1.3962 0-2.6015-.8175-3.1632-2h-3.6736C9.6015 19.1825 8.3962 20 7 20c-1.4232 0-2.648-.8495-3.195-2.069C2.205 17.6086 1 16.195 1 14.5v-2.9181c0-2.2418.679-4.1402 1.895-5.4907M5.5 16.5c0-.8284.6716-1.5 1.5-1.5s1.5.6716 1.5 1.5S7.8284 18 7 18s-1.5-.6716-1.5-1.5M17 15c-.8284 0-1.5.6716-1.5 1.5S16.1716 18 17 18s1.5-.6716 1.5-1.5S17.8284 15 17 15m-5.0832-5.0002h2.0767c.2072 0 .3244.2377.1984.4021l-2.9488 3.8462c-.1562.2038-.4813.0678-.446-.1865l.2864-2.0618H9.0068c-.2072 0-.3245-.2376-.1984-.4021l2.9487-3.8461c.1563-.2038.4814-.0679.4461.1865z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(Car3EvFilledIcon);
export default ForwardRef;
