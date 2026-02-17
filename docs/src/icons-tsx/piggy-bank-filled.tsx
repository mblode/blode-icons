import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const PiggyBankFilledIcon = (
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
      d="M9 21.0001c1.1046 0 2-.8954 2-2h2c0 1.1046.8954 2 2 2h2c1.1046 0 2-.8954 2-2v-2.1107a7.07 7.07 0 0 0 .8831-1.104 2.99 2.99 0 0 0 1.1159.2147c1.6568 0 3-1.3431 3-3a2.99 2.99 0 0 0-.402-1.5007c-.2765-.4781-.8883-.6415-1.3663-.3649s-.6415.8883-.3649 1.3663a.99.99 0 0 1 .1332.4993c0 .5523-.4478 1-1 1a1 1 0 0 1-.279-.0392 6.96 6.96 0 0 0 .28-1.9608c0-3.8663-3.1337-7-7-7h-3.9915a4.7 4.7 0 0 0-.5086-.553c-.5906-.5489-1.5092-1.131-2.8384-1.3535C5.3907 2.881 4.5 3.9535 4.5 5.0001v2.0835c-.519.5602-.8904 1.203-1.1762 1.8515H3c-1.1046 0-2 .8954-2 2v3.065c0 1.1046.8954 2 2 2h.4481c.433.6315.9227 1.1192 1.5519 1.5509v1.4491c0 1.1046.8954 2 2 2zm-.75-9c.6904 0 1.25-.5597 1.25-1.25s-.5596-1.25-1.25-1.25S7 10.0597 7 10.75s.5596 1.25 1.25 1.25"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(PiggyBankFilledIcon);
export default ForwardRef;
