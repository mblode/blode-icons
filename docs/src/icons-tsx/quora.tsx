import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const QuoraIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M21.7348 12c0 2.3282-.8155 4.4658-2.1761 6.1424l1.9003 1.886c.6177.6132.1872 1.6678-.6828 1.6726l-8.6481.0481a10 10 0 0 1-.1357.0009h-.031C6.595 21.7333 2.25 17.3745 2.25 12c0-5.3848 4.3618-9.75 9.7424-9.75 5.3805 0 9.7424 4.3652 9.7424 9.75m-9.7428 5.8987c3.2555 0 5.8946-2.6411 5.8946-5.8992 0-3.258-2.6391-5.8992-5.8946-5.8992s-5.8946 2.6412-5.8946 5.8992 2.6391 5.8992 5.8946 5.8992"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(QuoraIcon);
export default ForwardRef;
