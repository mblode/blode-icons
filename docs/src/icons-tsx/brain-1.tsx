import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Brain1Icon = (
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
      d="M15 10c-1.6569 0-3-1.3431-3-3m-3 7c1.6569 0 3 1.3431 3 3m0 3.2422A4.48 4.48 0 0 0 14.5 21c2.0553 0 3.7888-1.3779 4.3271-3.2604C20.102 17.2168 21 15.9633 21 14.5c0-.9793-.4022-1.8647-1.0505-2.5C20.5978 11.3647 21 10.4793 21 9.5c0-1.8049-1.3662-3.2907-3.1208-3.4797C17.4422 4.2848 15.8711 3 14 3a3.98 3.98 0 0 0-2 .5351m0 16.7071A4.48 4.48 0 0 1 9.5 21c-2.0553 0-3.7888-1.3779-4.327-3.2604C3.898 17.2168 3 15.9633 3 14.5c0-.9793.4022-1.8647 1.0505-2.5C3.4022 11.3647 3 10.4793 3 9.5c0-1.8049 1.3662-3.2907 3.1209-3.4797C6.5578 4.2848 8.1289 3 10 3c.7286 0 1.4117.1948 2 .5351m0 16.7071V3.5352"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(Brain1Icon);
export default ForwardRef;
