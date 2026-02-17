import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const BirthdayCakeFilledIcon = (
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
      d="M12.0003 1.1716a1 1 0 0 1 .7071.293l1.4142 1.4141c1.1716 1.1716 1.1716 3.0711 0 4.2427A2.99 2.99 0 0 1 13 7.8294V9h3.5185C18.7174 9 20.5 10.7826 20.5 12.9815v.326a3.496 3.496 0 0 1-.5 1.8028v2.8898c0 2.2091-1.7909 4-4 4H8c-2.2091 0-4-1.7909-4-4v-2.8898a3.496 3.496 0 0 1-.5-1.8028v-.326c0-2.1989 1.7826-3.9814 3.9815-3.9814H11V7.829a2.99 2.99 0 0 1-1.121-.7077c-1.1716-1.1716-1.1716-3.071 0-4.2427l1.4142-1.4142a1 1 0 0 1 .7071-.2929m-4.5188 9.8285c-1.0944 0-1.9815.8871-1.9815 1.9814v.326a1.5 1.5 0 0 0 2.057 1.3927l.4574-.1829a4 4 0 0 1 2.9712 0l.2716.1086a2 2 0 0 0 1.4856 0l.2716-.1086a4 4 0 0 1 2.9712 0l.4573.1829A1.5 1.5 0 0 0 18.5 13.3075v-.326c0-1.0943-.8871-1.9814-1.9815-1.9814z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(BirthdayCakeFilledIcon);
export default ForwardRef;
