import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const MagicBookIcon = (
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
      d="M4 6c0-2.2091 1.7909-4 4-4h11c.5523 0 1 .4477 1 1v18c0 .5523-.4477 1-1 1H7c-1.6569 0-3-1.3431-3-3zm2 10.1707V6c0-1.1046.8954-2 2-2h10v12H7c-.3506 0-.6872.0602-1 .1707M18 18H7c-.5523 0-1 .4477-1 1s.4477 1 1 1h11z"
      fill="currentColor"
      fillRule="evenodd"
    />
    <path
      d="M12.1845 7.4079a.5.5 0 0 0 .2236-.2236l.645-1.2899c.1842-.3685.7101-.3685.8944 0l.6449 1.2899a.5.5 0 0 0 .2236.2236l1.2898.6449c.3686.1843.3686.7102 0 .8944l-1.2898.645a.5.5 0 0 0-.2236.2235l-.6449 1.2899c-.1843.3685-.7102.3685-.8944 0l-.645-1.2899a.5.5 0 0 0-.2236-.2236l-1.2898-.6449c-.3685-.1843-.3685-.7102 0-.8944zM8.5775 11.7114a.3.3 0 0 0 .1342-.1342l.5202-1.0405c.1106-.2212.4261-.2212.5367 0l.5203 1.0405a.3.3 0 0 0 .1341.1342l1.0406.5203c.2211.1105.2211.4261 0 .5366l-1.0406.5203a.3.3 0 0 0-.1341.1342l-.5203 1.0405c-.1106.2212-.4261.2212-.5366 0l-.5203-1.0405a.3.3 0 0 0-.1342-.1342l-1.0406-.5203c-.221-.1105-.221-.4261 0-.5366z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(MagicBookIcon);
export default ForwardRef;
