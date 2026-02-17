import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Car1EvFilledIcon = (
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
      d="M5.2774 5.7812A4 4 0 0 1 8.6055 4H12.5a4 4 0 0 1 3.2 1.6l1.6415 2.1887a1 1 0 0 0 .6039.3806l1.8391.3678C21.6542 8.911 23 10.5527 23 12.4594V15c0 1.6014-1.2547 2.9097-2.8347 2.9955C19.6045 19.1804 18.398 20 17 20c-1.3962 0-2.6015-.8175-3.1632-2h-3.6736C9.6015 19.1825 8.3962 20 7 20c-1.398 0-2.6045-.8196-3.1653-2.0045C2.2547 17.9097 1 16.6014 1 15v-3.3944a4 4 0 0 1 1.7812-3.3283l1.3313-.8875a1 1 0 0 0 .2773-.2773zM7 18c.8284 0 1.5-.6716 1.5-1.5S7.8284 15 7 15s-1.5.6716-1.5 1.5S6.1716 18 7 18m11.5-1.5c0 .8284-.6716 1.5-1.5 1.5s-1.5-.6716-1.5-1.5.6716-1.5 1.5-1.5 1.5.6716 1.5 1.5M11.9167 10h2.0766c.2073 0 .3245.2376.1984.4021l-2.9487 3.8462c-.1562.2037-.4813.0678-.446-.1865L11.0833 12H9.0067c-.2073 0-.3245-.2376-.1984-.4021l2.9487-3.8462c.1562-.2037.4814-.0678.446.1865z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(Car1EvFilledIcon);
export default ForwardRef;
