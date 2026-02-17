import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const PickelballIcon = (
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
    <circle cx={12} cy={12} r={9} stroke="currentColor" strokeWidth={2} />
    <path
      d="M13.0984 12c0 .6075-.4924 1.1-1.1 1.1-.6075 0-1.1-.4925-1.1-1.1s.4925-1.1 1.1-1.1 1.1.4925 1.1 1.1M10.9985 7.9999c0 .6075-.4925 1.1-1.1 1.1s-1.1-.4925-1.1-1.1.4925-1.1 1.1-1.1 1.1.4925 1.1 1.1M10.9985 15.9999c0 .6075-.4925 1.1-1.1 1.1s-1.1-.4925-1.1-1.1.4925-1.1 1.1-1.1 1.1.4925 1.1 1.1M15.1985 7.9999c0 .6075-.4925 1.1-1.1 1.1s-1.1-.4925-1.1-1.1.4925-1.1 1.1-1.1 1.1.4925 1.1 1.1M15.1985 15.9999c0 .6075-.4925 1.1-1.1 1.1s-1.1-.4925-1.1-1.1.4925-1.1 1.1-1.1 1.1.4925 1.1 1.1M8.3484 12c0 .6075-.4924 1.1-1.1 1.1-.6075 0-1.1-.4925-1.1-1.1s.4925-1.1 1.1-1.1 1.1.4925 1.1 1.1M17.8436 12c0 .6075-.4925 1.1-1.1 1.1s-1.1-.4925-1.1-1.1.4924-1.1 1.1-1.1c.6075 0 1.1.4925 1.1 1.1"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(PickelballIcon);
export default ForwardRef;
