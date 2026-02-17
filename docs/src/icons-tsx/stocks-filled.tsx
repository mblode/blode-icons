import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const StocksFilledIcon = (
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
      d="M15 3h2c2.2091 0 4 1.7909 4 4v10c0 2.2091-1.7909 4-4 4h-2v-8.1707c1.1652-.4118 2-1.5231 2-2.8293s-.8348-2.4175-2-2.8293zM13 21v-8.171a3 3 0 0 1-.2932-.1216l-2.9997 2.9997c-.3905.3905-1.0237.3905-1.4142 0L7 14.4142l-3.8094 3.8094C3.7076 19.8342 5.2176 21 7 21zM3 15.5858V7c0-2.2091 1.7909-4 4-4h6v4.1707c-1.1652.4118-2 1.523-2 2.8293 0 .4628.1052.9016.2926 1.2932L9 13.5858l-1.2929-1.2929c-.3905-.3905-1.0237-.3905-1.4142 0zM13 10c0-.5523.4477-1 1-1s1 .4477 1 1-.4477 1-1 1a.994.994 0 0 1-.7071-.2929A.994.994 0 0 1 13 10"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(StocksFilledIcon);
export default ForwardRef;
