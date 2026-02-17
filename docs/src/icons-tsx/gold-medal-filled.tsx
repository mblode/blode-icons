import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const GoldMedalFilledIcon = (
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
      d="M16.5 22c0 .3138-.1469.6099-.3975.7988a1 1 0 0 1-.8769.1631L12 22.04l-3.2256.9219a1 1 0 0 1-.877-.1631A1 1 0 0 1 7.5 22v-3.3818C8.8394 19.34 10.3718 19.75 12 19.75s3.1605-.41 4.5-1.1318z"
      fill="currentColor"
    />
    <path
      clipRule="evenodd"
      d="M12 2c4.5563 0 8.25 3.6937 8.25 8.25S16.5563 18.5 12 18.5s-8.25-3.6937-8.25-8.25S7.4437 2 12 2m-.1826 4.25c-.3733 0-.7397.1047-1.0567.3018l-1.1503.7148a.716.716 0 0 0-.337.6074c.0002.558.6117.9005 1.0879.6094l.6924-.4238a.04.04 0 0 1 .0195-.005.0366.0366 0 0 1 .0362.0362v5.1944c0 .5328.432.9648.9648.9648.5329 0 .9649-.432.9649-.9648V7.25c0-.5523-.4478-1-1-1z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(GoldMedalFilledIcon);
export default ForwardRef;
