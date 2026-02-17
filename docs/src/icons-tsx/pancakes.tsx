import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const PancakesIcon = (
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
      d="M16 12h2.25c.9665 0 1.75-.7835 1.75-1.75s-.7835-1.75-1.75-1.75H18M8 12H4.75C3.7835 12 3 11.2165 3 10.25S3.7835 8.5 4.75 8.5H6"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      style={{
        stroke: "currentColor",
        strokeOpacity: 1,
      }}
    />
    <path
      d="M18 8.5h.25c.9665 0 1.75-.7835 1.75-1.75S19.2165 5 18.25 5H5.75C4.7835 5 4 5.7835 4 6.75S4.7835 8.5 5.75 8.5H6c1.1046 0 2 .8954 2 2V14c0 1.1046.8954 2 2 2s2-.8954 2-2v-3"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      style={{
        stroke: "currentColor",
        strokeOpacity: 1,
      }}
    />
    <path
      d="M16 12h3.25c.9665 0 1.75.7835 1.75 1.75s-.7835 1.75-1.75 1.75H12M8 12H5.75C4.7835 12 4 12.7835 4 13.75s.7835 1.75 1.75 1.75H8M8 15.5H5.75c-.9665 0-1.75.7835-1.75 1.75S4.7835 19 5.75 19h12.5c.9665 0 1.75-.7835 1.75-1.75s-.7835-1.75-1.75-1.75H15"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      style={{
        stroke: "currentColor",
        strokeOpacity: 1,
      }}
    />
    <path
      d="M19 8.5h-2c-.5523 0-1 .4477-1 1V11c0 1.1046-.8954 2-2 2s-2-.8954-2-2"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      style={{
        stroke: "currentColor",
        strokeOpacity: 1,
      }}
    />
    <path
      d="M2 19h20"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
      style={{
        stroke: "currentColor",
        strokeOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(PancakesIcon);
export default ForwardRef;
