import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const RadarFilledIcon = (
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
      d="M6.023 3.982C3.581 5.8053 2 8.718 2 12c0 5.5228 4.4772 10 10 10s10-4.4772 10-10c0-3.282-1.5811-6.1947-4.0231-8.018l-2.0755 3.4592C17.1848 8.5407 18 10.1746 18 11.9996c0 3.3137-2.6863 6-6 6s-6-2.6863-6-6c0-1.825.8152-3.459 2.0986-4.5584z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
    <path
      d="m16.2628 2.9515-4.2292 7.0488L12 10l-.0335.0003-4.2293-7.0488C9.0302 2.3412 10.4753 2 12 2s2.9697.3412 4.2628.9515"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
    <path
      d="m9.1497 9.193 1.1015 1.8358A1.99 1.99 0 0 0 10 12c0 1.1046.8954 2 2 2s2-.8954 2-2c0-.3524-.0912-.6836-.2512-.9712l1.1015-1.8358C15.5622 9.9158 16 10.9068 16 11.9996c0 2.2091-1.7909 4-4 4s-4-1.7909-4-4c0-1.0928.4379-2.0838 1.1497-2.8066"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(RadarFilledIcon);
export default ForwardRef;
