import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const PumpjackIcon = (
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
      d="M20 20H4M20 5c0 .5523-.4477 1-1 1s-1-.4477-1-1 .4477-1 1-1 1 .4477 1 1M19 6v14M4.3545 10.6096c-.5965-1.3977-.5248-2.9127.072-4.1889m-.072 4.1889 13.6383-5.2147M4.3545 10.6096c.5144 1.2056 1.4358 2.1127 2.5356 2.6294"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
      d="m11.9997 8 .9409-.3387h-1.8818zm3.3791 12.3387c.1871.5197.76.7893 1.2796.6022s.7892-.76.6022-1.2796zm-8.64-.6774c-.187.5196.0825 1.0925.6022 1.2796s1.0925-.0825 1.2796-.6022zM14.8797 16l.9409-.3387zm-3.8209-8.3387-2.88 8 1.8818.6774 2.88-8zm-2.88 8-1.44 4 1.8818.6774 1.44-4zm2.88-7.3226 2.88 8 1.8818-.6774-2.88-8zm2.88 8 1.44 4 1.8818-.6774-1.44-4zM9.1197 17h5.76v-2h-5.76z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(PumpjackIcon);
export default ForwardRef;
