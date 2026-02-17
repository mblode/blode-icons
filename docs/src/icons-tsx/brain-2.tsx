import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Brain2Icon = (
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
      d="m6.1145 4.8034 1.6873-1.0545a3 3 0 0 1 2.5387-.302l.7108.2369a3 3 0 0 0 1.8974 0l.7108-.237a3 3 0 0 1 2.5387.302l1.6873 1.0546A2.371 2.371 0 0 1 19 6.8143c0 .7464.3514 1.4493.9485 1.897L20 8.75a2.5 2.5 0 0 1 1 2v1.5a2.5 2.5 0 0 1-1 2 2.5 2.5 0 0 0-1 2v.5872a3 3 0 0 1-1.41 2.544l-1.3918.8699a3 3 0 0 1-2.5387.3021l-.7108-.237a3 3 0 0 0-1.8974 0l-.7108.237a3 3 0 0 1-2.5387-.3021L6.41 19.3812A3 3 0 0 1 5 16.8372V16.25a2.5 2.5 0 0 0-1-2 2.5 2.5 0 0 1-1-2v-1.5a2.5 2.5 0 0 1 1-2l.0515-.0386A2.371 2.371 0 0 0 5 6.8143c0-.8176.4212-1.5776 1.1145-2.011"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
      d="M12 4.5v2.2574a3 3 0 0 0 .8787 2.1213L15 11m-3 8.5v-2.2574a3 3 0 0 0-.8787-2.1213L9 13"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <circle
      cx={9}
      cy={13}
      r={1}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <circle
      cx={15}
      cy={11}
      r={1}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(Brain2Icon);
export default ForwardRef;
