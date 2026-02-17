import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ThumbtackIcon = (
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
      d="M12 15H5v-1.4652c0-.6626.2632-1.298.7317-1.7665A6.037 6.037 0 0 0 7.5 7.4993V6c0-1.6569 1.3431-3 3-3h3c1.6569 0 3 1.3431 3 3v1.4993a6.037 6.037 0 0 0 1.7683 4.269A2.498 2.498 0 0 1 19 13.5348V15zm0 0v6"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(ThumbtackIcon);
export default ForwardRef;
