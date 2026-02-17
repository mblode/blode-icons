import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const CornerRadiusFilledIcon = (
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
      d="M3 20v-3.2002c0-2.2236-.0008-3.9518.1123-5.3359.114-1.3957.3485-2.5298.8682-3.5498l.168-.3135A9 9 0 0 1 7.914 3.9805l.3886-.1817c.9194-.3945 1.9401-.5867 3.1612-.6865C12.848 2.9993 14.5762 3 16.7998 3H20c.5523 0 1 .4477 1 1s-.4477 1-1 1h-3.2002c-2.2566 0-3.889.0006-5.1728.1055-1.1131.091-1.8966.2564-2.5381.5322l-.2666.125a7 7 0 0 0-2.9287 2.8154l-.1309.2442c-.352.691-.5533 1.5327-.6572 2.8047C5.0005 12.9108 5 14.5432 5 16.7998V20c0 .5523-.4477 1-1 1s-1-.4477-1-1"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(CornerRadiusFilledIcon);
export default ForwardRef;
