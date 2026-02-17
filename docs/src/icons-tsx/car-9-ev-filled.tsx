import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Car9EvFilledIcon = (
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
      d="M1 8v7c0 1.6014 1.2547 2.9097 2.8347 2.9955C4.3955 19.1804 5.602 20 7 20c1.3962 0 2.6015-.8175 3.1632-2h3.6736c.5617 1.1825 1.767 2 3.1632 2 1.398 0 2.6045-.8196 3.1653-2.0045C21.7453 17.9097 23 16.6014 23 15v-2.6455a3.001 3.001 0 0 0-1.8857-2.7861l-1.6866-.6739a1 1 0 0 1-.5185-.4726l-.042-.0938-.6914-1.7783A4 4 0 0 0 14.4482 4H5C2.7909 4 1 5.7909 1 8m6 7c.8284 0 1.5.6716 1.5 1.5S7.8284 18 7 18s-1.5-.6716-1.5-1.5S6.1716 15 7 15m10 0c.8284 0 1.5.6716 1.5 1.5S17.8284 18 17 18s-1.5-.6716-1.5-1.5.6716-1.5 1.5-1.5m-5.0832-5.0002h2.0767c.2072 0 .3244.2377.1984.4021l-2.9488 3.8462c-.1562.2038-.4813.0678-.446-.1865l.2864-2.0618H9.0068c-.2072 0-.3245-.2376-.1984-.4021l2.9487-3.8461c.1563-.2038.4814-.0679.4461.1865z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(Car9EvFilledIcon);
export default ForwardRef;
