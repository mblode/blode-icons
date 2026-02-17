import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const FolderLinkFilledIcon = (
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
      d="M6 3C3.7909 3 2 4.7909 2 7v4.8027C2.8825 11.2922 3.9071 11 5 11h3c3.3137 0 6 2.6863 6 6 0 1.0929-.2922 2.1175-.8027 3H18c2.2091 0 4-1.7909 4-4v-6c0-2.2091-1.7909-4-4-4h-4.9296a1 1 0 0 1-.8321-.4453l-.8125-1.2188A3 3 0 0 0 8.9296 3z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
    <path
      d="M8 13c-.5523 0-1 .4477-1 1s.4477 1 1 1c1.1046 0 2 .8954 2 2s-.8954 2-2 2c-.5523 0-1 .4477-1 1s.4477 1 1 1c2.2091 0 4-1.7909 4-4s-1.7909-4-4-4M5 13c-2.2091 0-4 1.7909-4 4s1.7909 4 4 4c.5523 0 1-.4477 1-1s-.4477-1-1-1c-1.1046 0-2-.8954-2-2s.8954-2 2-2c.5523 0 1-.4477 1-1s-.4477-1-1-1"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
    <path
      d="M6 16c-.5523 0-1 .4477-1 1s.4477 1 1 1h1c.5523 0 1-.4477 1-1s-.4477-1-1-1z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(FolderLinkFilledIcon);
export default ForwardRef;
