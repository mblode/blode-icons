import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const LayoutAlignBottomFilledIcon = (
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
      clipRule="evenodd"
      d="M8.7587 3h6.4826c.805 0 1.4693 0 2.0105.0442.5621.046 1.0788.1445 1.5642.3918a4 4 0 0 1 1.748 1.748c.2473.4854.3459 1.002.3918 1.5642C21 7.2894 21 7.9537 21 8.7587v6.4826c0 .805 0 1.4693-.0442 2.0105-.0459.5621-.1445 1.0788-.3918 1.5642a4 4 0 0 1-1.748 1.748c-.4854.2473-1.0021.3459-1.5642.3918C16.7106 21 16.0463 21 15.2413 21H8.7587c-.805 0-1.4693 0-2.0105-.0442-.5621-.0459-1.0788-.1445-1.5642-.3918a4 4 0 0 1-1.748-1.748c-.2473-.4854-.3459-1.0021-.3918-1.5642C3 16.7106 3 16.0463 3 15.2413V8.7587c0-.805 0-1.4693.0442-2.0105.046-.5621.1445-1.0788.3918-1.5642a4 4 0 0 1 1.748-1.748c.4854-.2473 1.002-.3459 1.5642-.3918C7.2894 3 7.9537 3 8.7587 3M8 15c-.5523 0-1 .4477-1 1s.4477 1 1 1h8c.5523 0 1-.4477 1-1s-.4477-1-1-1z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(LayoutAlignBottomFilledIcon);
export default ForwardRef;
