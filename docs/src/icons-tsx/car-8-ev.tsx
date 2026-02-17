import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Car8EvIcon = (
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
      d="M4.5 17H4c-1.1046 0-2-.8954-2-2V8c0-1.6569 1.3432-3 3-3h9.9536c.995 0 1.9544.3709 2.6907 1.0402l3.0464 2.7695A4 4 0 0 1 22 11.7695V15c0 1.1046-.8954 2-2 2h-.5"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path d="M9.5 17h5" stroke="currentColor" strokeWidth={2} />
    <circle cx={7} cy={16.75} r={2.25} stroke="currentColor" strokeWidth={2} />
    <circle cx={17} cy={16.75} r={2.25} stroke="currentColor" strokeWidth={2} />
    <path
      d="M13.9949 9.9994h-2.0766l.2863-2.0618c.0354-.2543-.2898-.3903-.446-.1865l-2.9487 3.8461c-.1261.1645-.0089.4022.1984.4022h2.0766l-.2863 2.0617c-.0353.2544.2898.3903.446.1865l2.9487-3.8461c.1261-.1645.0089-.4022-.1984-.4022"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(Car8EvIcon);
export default ForwardRef;
