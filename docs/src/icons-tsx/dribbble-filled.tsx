import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const DribbbleFilledIcon = (
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
      d="M2 12q0-2.72 1.34-5.02t3.64-3.64T12 2t5.02 1.34 3.64 3.64T22 12t-1.34 5.02-3.64 3.64T12 22t-5.02-1.34-3.64-3.64T2 12m1.66 0q0 3.12 2.1 5.5.96-1.88 3.04-3.58t4.06-2.14q-.3-.7-.58-1.26-3.44 1.1-7.44 1.1-.78 0-1.16-.02 0 .08-.01.2t-.01.2m.26-2.06q.44.04 1.3.04 3.34 0 6.34-.9-1.52-2.7-3.34-4.5-1.58.8-2.71 2.22T3.92 9.94m2.98 8.64q2.26 1.76 5.1 1.76 1.48 0 2.94-.56-.4-3.42-1.56-6.62-1.84.4-3.71 2.02t-2.77 3.4M9.96 3.94q1.76 1.82 3.26 4.54 2.72-1.14 4.1-2.9Q15 3.66 12 3.66q-1.02 0-2.04.28m3.98 5.96q.3.64.68 1.62 1.48-.14 3.22-.14 1.24 0 2.46.06-.16-2.72-1.96-4.84-1.3 1.94-4.4 3.3m1.18 3.02q1.02 2.96 1.38 6.08 1.58-1.02 2.58-2.62t1.2-3.46q-1.46-.1-2.66-.1-1.1 0-2.5.1"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(DribbbleFilledIcon);
export default ForwardRef;
