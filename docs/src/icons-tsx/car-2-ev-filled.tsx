import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Car2EvFilledIcon = (
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
      d="M8.2426 4a4 4 0 0 0-2.8284 1.1716L2.1716 8.4142A4 4 0 0 0 1 11.2426V14.5c0 1.695 1.205 3.1086 2.805 3.431C4.352 19.1505 5.5768 20 7 20c1.3962 0 2.6015-.8175 3.1632-2h3.6736c.5617 1.1825 1.767 2 3.1632 2 1.398 0 2.6045-.8196 3.1653-2.0045C21.7453 17.9097 23 16.6014 23 15v-2.5406c0-1.9067-1.3458-3.5484-3.2155-3.9223l-1.4644-.2929a2 2 0 0 1-1.2078-.7611L15.7 5.6A4 4 0 0 0 12.5 4zM5.5 16.5c0-.8284.6716-1.5 1.5-1.5s1.5.6716 1.5 1.5S7.8284 18 7 18s-1.5-.6716-1.5-1.5m10 0c0-.8284.6716-1.5 1.5-1.5s1.5.6716 1.5 1.5S17.8284 18 17 18s-1.5-.6716-1.5-1.5M11.9167 10h2.0766c.2073 0 .3245.2376.1984.4021l-2.9487 3.8462c-.1562.2037-.4813.0678-.446-.1865L11.0833 12H9.0067c-.2073 0-.3245-.2376-.1984-.4021l2.9487-3.8462c.1562-.2037.4814-.0678.446.1865z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(Car2EvFilledIcon);
export default ForwardRef;
