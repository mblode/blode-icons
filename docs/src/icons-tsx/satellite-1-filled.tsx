import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Satellite1FilledIcon = (
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
      d="M11.9998 2c-.5523 0-1 .4477-1 1s.4477 1 1 1c4.4183 0 8 3.5817 8 8 0 .5523.4477 1 1 1s1-.4477 1-1c0-5.5228-4.4771-10-10-10"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
    <path
      d="M11.9998 5c-.5523 0-1 .4477-1 1s.4477 1 1 1c2.7615 0 5 2.2386 5 5 0 .5523.4477 1 1 1s1-.4477 1-1c0-3.866-3.134-7-7-7M8.155 7.7409c-.8191-.819-1.9405-1.2242-3.0023-1.1215-1.0948.106-2.1202.7617-2.5607 1.9841-1.272 3.5298-.495 7.6359 2.3368 10.4676 2.8317 2.8317 6.9377 3.6087 10.4675 2.3367 1.2224-.4405 1.8782-1.4658 1.9841-2.5606.1027-1.0619-.3024-2.1832-1.1214-3.0023L12.914 12.5l.7929-.7929c.3906-.3905.3906-1.0237 0-1.4142s-1.0236-.3905-1.4142 0l-.7929.7929z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(Satellite1FilledIcon);
export default ForwardRef;
