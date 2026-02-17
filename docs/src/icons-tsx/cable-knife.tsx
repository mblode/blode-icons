import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const CableKnifeIcon = (
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
      d="M5 4v6.1716a2 2 0 0 0 .5858 1.4142l.3284.3284A2 2 0 0 1 6.5 13.3284V18.5c0 .8284.6716 1.5 1.5 1.5s1.5-.6716 1.5-1.5v-5.1716a2 2 0 0 1 .5858-1.4142l.3284-.3284A2 2 0 0 0 11 10.1716V4M8 4v5M19 18.5V4c-.895 0-4.0906 2.4696-4.9823 8.9027C13.8605 14.037 14.7698 15 15.8997 15h.1412v3.5c0 .8284.6624 1.5 1.4795 1.5S19 19.3284 19 18.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(CableKnifeIcon);
export default ForwardRef;
