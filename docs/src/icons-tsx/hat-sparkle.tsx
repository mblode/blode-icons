import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const HatSparkleIcon = (
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
      d="m13.969 3.2981.031-.062.031.062c.1452.2903.3806.5257.6709.6709l.062.031-.062.031a1.5 1.5 0 0 0-.6709.6709l-.031.062-.031-.062a1.5 1.5 0 0 0-.6709-.6709L13.2361 4l.062-.031a1.5 1.5 0 0 0 .6709-.6709ZM9 4.693A1.4 1.4 0 0 0 9.307 5 1.4 1.4 0 0 0 9 5.307 1.4 1.4 0 0 0 8.693 5 1.4 1.4 0 0 0 9 4.693Z"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
      d="M18 13v4.9994c0 1.2035-.718 2.3115-1.8922 2.5754C14.9071 20.8448 13.5019 21 12 21s-2.907-.1552-4.1078-.4252C6.718 20.3109 6 19.2029 6 17.9994V13"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
      d="M20 11c0 1.1046-3.5817 2-8 2s-8-.8954-8-2 3.5817-2 8-2 8 .8954 8 2Z"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(HatSparkleIcon);
export default ForwardRef;
