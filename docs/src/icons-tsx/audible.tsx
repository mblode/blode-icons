import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const AudibleIcon = (
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
      d="M12.0073 16.9155 23 10.0614v1.8587l-10.9927 6.8832L1 11.9201v-1.8587z"
      fill="currentColor"
    />
    <path
      d="M12.0073 8.3188c-2.4832 0-4.6614 1.2488-5.9103 3.1802.1017-.1017.1598-.1597.2614-.2323 3.093-2.5703 7.5512-1.9895 9.9763 1.2488l1.6118-1.031c-1.2779-1.8733-3.4706-3.1657-5.9392-3.1657"
      fill="currentColor"
    />
    <path
      d="M12.0073 11.499c-1.3505 0-2.5413.6825-3.2528 1.67.5808-.4211 1.2488-.639 1.9604-.639 1.1907 0 2.2508.6099 2.9623 1.641l1.5393-.9585c-.668-1.06-1.8587-1.7135-3.2092-1.7135M4.5723 8.7109c4.5307-3.5723 10.9346-2.5994 14.3472 2.1492l.029.029 1.67-1.031c-1.8297-2.8027-5.0099-4.6614-8.6112-4.6614-3.5723 0-6.7525 1.8297-8.6113 4.6614.334-.3776.7552-.8277 1.1763-1.1472"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(AudibleIcon);
export default ForwardRef;
