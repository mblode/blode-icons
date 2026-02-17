import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const CircleQuestionmarkFilledIcon = (
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
      d="M12 2C6.4772 2 2 6.4772 2 12s4.4772 10 10 10 10-4.4772 10-10S17.5228 2 12 2m0 7a1 1 0 0 0-.8785.5215c-.265.4846-.8727.6625-1.3572.3975-.4846-.265-.6625-.8727-.3975-1.3572C9.8746 7.6333 10.8626 7 12 7c1.5148 0 2.5669 1.0064 2.8664 2.189.3012 1.1889-.1563 2.574-1.5248 3.2582A.618.618 0 0 0 13 13c0 .5523-.4477 1-1 1s-1-.4477-1-1a2.618 2.618 0 0 1 1.4472-2.3416c.4548-.2274.5716-.6187.4805-.9783C12.835 9.3141 12.5283 9 12 9m0 8c.5523 0 1-.4477 1-1s-.4477-1-1-1-1 .4477-1 1 .4477 1 1 1"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(CircleQuestionmarkFilledIcon);
export default ForwardRef;
