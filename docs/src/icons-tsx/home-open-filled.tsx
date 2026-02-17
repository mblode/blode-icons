import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const HomeOpenFilledIcon = (
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
      d="M14.6861 2.8346c-1.5243-1.3814-3.8479-1.3814-5.3722 0l-5 4.5313A4 4 0 0 0 3 10.3298v6.6701c0 2.2092 1.7909 4 4 4h1c1.1046 0 2-.8954 2-2v-3c0-1.1045.8954-2 2-2s2 .8955 2 2v3c0 1.1046.8954 2 2 2h1c2.2091 0 4-1.7908 4-4v-6.6701a4 4 0 0 0-1.3139-2.964z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(HomeOpenFilledIcon);
export default ForwardRef;
