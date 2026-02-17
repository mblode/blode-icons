import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Fire2Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M12 21.0004c4.1421 0 7.5-3.5 7.5-8 0-5.0027-4.4207-8.5559-6.236-9.804-.4258-.2929-.9908-.167-1.2872.2563L9.6615 6.7603c-.345.493-1.0517.5548-1.4772.1293-.378-.378-.9946-.3803-1.3337.033C5.2836 8.8325 4.5 11.2121 4.5 13.0003c0 4.5 3.3579 8 7.5 8Zm0 0c1.6569 0 3-1.5331 3-3.4244 0-2.0831-1.6631-3.6008-2.5128-4.2402-.2919-.2197-.6825-.2197-.9744 0C10.6631 13.9752 9 15.4929 9 17.576c0 1.8913 1.3431 3.4244 3 3.4244Z"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(Fire2Icon);
export default ForwardRef;
