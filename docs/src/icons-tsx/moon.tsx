import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const MoonIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M20.9638 12.7674c-1.1277.7773-2.4945 1.2324-3.9677 1.2324-3.866 0-7-3.1341-7-7 0-1.4731.455-2.84 1.2322-3.9676C6.6191 3.4228 3 7.2877 3 11.998c0 4.9695 4.0286 8.9981 8.9981 8.9981 4.7103 0 8.5753-3.6193 8.9657-8.2286"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(MoonIcon);
export default ForwardRef;
