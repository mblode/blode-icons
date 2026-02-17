import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const AutoFlashFilledIcon = (
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
      d="M14.0019 2.4014c0-1.484-1.9249-2.0669-2.7481-.832L3.188 13.668c-.6645.9968.05 2.3321 1.2481 2.3321h5.5658v5.5986c0 1.4841 1.9248 2.0669 2.748.832l8.0658-12.0986c.6645-.9968-.0501-2.332-1.2481-2.332h-5.5657z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
    <path
      clipRule="evenodd"
      d="M21.4291 14.0162c.3985.0726.7138.3783.7987.7743l1.5 7c.1157.5401-.2282 1.0716-.7683 1.1874s-1.0716-.2283-1.1873-.7683l-.152-.7095h-3.36l-.669 1.0407c-.2987.4646-.9174.5991-1.382.3004s-.599-.9173-.3004-1.3819l4.5-7a1 1 0 0 1 1.0203-.4431m-1.8831 5.4839h1.6456l-.4114-1.9199z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(AutoFlashFilledIcon);
export default ForwardRef;
