import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const LayoutTopbarFilledIcon = (
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
      d="M8.7587 3h6.4826c.805 0 1.4693 0 2.0105.0442.5621.046 1.0788.1445 1.5642.3918a4 4 0 0 1 1.748 1.748c.2473.4854.3459 1.002.3918 1.5642C21 7.2894 21 7.9537 21 8.7587V9H3v-.2413c0-.805 0-1.4693.0442-2.0105.046-.5621.1445-1.0788.3918-1.5642a4 4 0 0 1 1.748-1.748c.4854-.2473 1.002-.3459 1.5642-.3918C7.2894 3 7.9537 3 8.7587 3M3 11v4.2413c0 .805 0 1.4693.0442 2.0105.046.5621.1445 1.0788.3918 1.5642a4 4 0 0 0 1.748 1.748c.4854.2473 1.002.3459 1.5642.3918C7.2894 21 7.9537 21 8.7587 21H11V11zM13 21h2.2413c.805 0 1.4693 0 2.0105-.0442.5621-.0459 1.0788-.1445 1.5642-.3918a4 4 0 0 0 1.748-1.748c.2473-.4854.3459-1.0021.3918-1.5642C21 16.7106 21 16.0463 21 15.2413V11h-8z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(LayoutTopbarFilledIcon);
export default ForwardRef;
