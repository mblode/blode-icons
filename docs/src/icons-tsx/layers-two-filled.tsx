import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const LayersTwoFilledIcon = (
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
      d="m3.5695 13.0002-.4151.2024c-1.4975.7305-1.4975 2.8646 0 3.5951l7.9691 3.8874a2 2 0 0 0 1.7537 0l7.9691-3.8874c1.4975-.7305 1.4975-2.8646 0-3.5951l-.4151-.2024-7.554 3.6849a2 2 0 0 1-1.7537 0z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
    <path
      d="M12.8772 3.3153a2 2 0 0 0-1.7537 0L3.1544 7.2026c-1.4975.7305-1.4975 2.8646 0 3.5951l7.9691 3.8874a2 2 0 0 0 1.7537 0l7.9691-3.8874c1.4975-.7305 1.4975-2.8646 0-3.595z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(LayersTwoFilledIcon);
export default ForwardRef;
