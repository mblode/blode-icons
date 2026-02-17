import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const WizardHatFilledIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    fill="none"
    height={24}
    ref={ref}
    viewBox="0 0 25 24"
    width={25}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M20.6229 18.9999H21.75c.5523 0 1 .4477 1 1s-.4477 1-1 1h-18c-.5523 0-1-.4477-1-1s.4477-1 1-1h1.12l2.8444-7.5173.1207.0563c.0554.0259.1.0704.1259.1259l.5529 1.1847c.0936.2005.3786.2005.4722 0l.553-1.1847a.26.26 0 0 1 .1258-.1259l1.1847-.5529c.2005-.0936.2005-.3787 0-.4722l-1.1847-.553a.26.26 0 0 1-.1259-.1259l-.5529-1.1847a.256.256 0 0 0-.1487-.1356l1.7361-4.5882c.8223-2.1734 3.6968-2.627 5.1484-.8124l3.809 4.7611a1.0001 1.0001 0 0 1-.7809 1.6247h-2.2726zM12.711 14.835a.26.26 0 0 1-.1259.1259l-1.1847.5529c-.2005.0935-.2005.3786 0 .4722l1.1847.5529c.0554.0259.1.0704.1259.1259l.5529 1.1847c.0936.2005.3786.2005.4722 0l.5529-1.1847a.26.26 0 0 1 .1259-.1259l1.1847-.5529c.2005-.0936.2005-.3787 0-.4722l-1.1847-.5529a.26.26 0 0 1-.1259-.1259l-.5529-1.1848c-.0936-.2004-.3786-.2004-.4722 0z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(WizardHatFilledIcon);
export default ForwardRef;
