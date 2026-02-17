import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const AlbumsIcon = (
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
      d="M4 6v12M8 5v14m4-12.0464v10.0929c0 2.0595 2.0276 3.5065 3.9752 2.837l2-.6875A3 3 0 0 0 20 16.359V7.641a3 3 0 0 0-2.0248-2.837l-2-.6875C14.0276 3.447 12 4.8941 12 6.9535"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(AlbumsIcon);
export default ForwardRef;
