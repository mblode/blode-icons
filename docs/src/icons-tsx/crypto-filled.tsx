import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const CryptoFilledIcon = (
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
      d="m9.5 9.9794 2-1.1547a1 1 0 0 1 1 0l2 1.1547a1 1 0 0 1 .5.866v2.3093a1 1 0 0 1-.5.866l-2 1.1547a1 1 0 0 1-1 0l-2-1.1547a1 1 0 0 1-.5-.866v-2.3093a1 1 0 0 1 .5-.866"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
    <path
      clipRule="evenodd"
      d="M2 12C2 6.4772 6.4772 2 12 2s10 4.4772 10 10-4.4772 10-10 10S2 17.5228 2 12m13.5-3.7527-2-1.1547a3 3 0 0 0-3 0l-2 1.1547A3 3 0 0 0 7 10.8454v2.3093a3 3 0 0 0 1.5 2.598l2 1.1547a3 3 0 0 0 3 0l2-1.1547a3 3 0 0 0 1.5-2.598v-2.3093a3 3 0 0 0-1.5-2.598"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(CryptoFilledIcon);
export default ForwardRef;
