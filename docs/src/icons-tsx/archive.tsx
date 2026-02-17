import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ArchiveIcon = (
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
      d="M20 15.2v-4.6c0-.5601 0-.84-.109-1.054a1 1 0 0 0-.437-.437C19.2401 9 18.9601 9 18.4 9H5.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C4 9.76 4 10.04 4 10.6v4.6c0 1.6802 0 2.5202.327 3.162a3 3 0 0 0 1.311 1.311C6.2798 20 7.1198 20 8.8 20h6.4c1.6802 0 2.5202 0 3.162-.327a3 3 0 0 0 1.311-1.311C20 17.7202 20 16.8802 20 15.2Z"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
      d="M6 8V4c0-.5523.4477-1 1-1h3.0858a1 1 0 0 1 .7071.2929l1.4142 1.4142A1 1 0 0 0 12.9142 5H17c.5523 0 1 .4477 1 1v2M8 13h4"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(ArchiveIcon);
export default ForwardRef;
