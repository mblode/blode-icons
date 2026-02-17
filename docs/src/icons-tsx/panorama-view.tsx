import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const PanoramaViewIcon = (
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
      d="M22 15.8205v-7.662c0-2.0466-2.0078-3.486-4.0115-3.0694-4.0437.8405-7.9333.8405-11.977 0C4.0078 4.6726 2 6.1119 2 8.1585v7.662c0 2.0526 2.0193 3.4935 4.0284 3.0733 4.0235-.8416 7.9197-.8416 11.9432 0C19.9807 19.314 22 17.8731 22 15.8205Z"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(PanoramaViewIcon);
export default ForwardRef;
