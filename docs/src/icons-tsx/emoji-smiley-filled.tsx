import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const EmojiSmileyFilledIcon = (
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
      d="M2 12C2 6.4772 6.4772 2 12 2s10 4.4772 10 10-4.4772 10-10 10S2 17.5228 2 12m7.5-1.5c.8284 0 1.5-.6716 1.5-1.5s-.6716-1.5-1.5-1.5S8 8.1716 8 9s.6716 1.5 1.5 1.5M16 9c0 .8284-.6716 1.5-1.5 1.5S13 9.8284 13 9s.6716-1.5 1.5-1.5S16 8.1716 16 9m-9.4353 3.8474c-.0843-.5458-.595-.92-1.1409-.8357-.5458.0843-.92.5951-.8357 1.1409C5.1433 16.7478 8.2493 19.5 12 19.5c3.7506 0 6.8567-2.7522 7.4118-6.3474.0843-.5458-.2899-1.0566-.8357-1.1409s-1.0566.2899-1.1409.8357C17.0284 15.4824 14.7489 17.5 12 17.5c-2.749 0-5.0284-2.0176-5.4353-4.6526"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(EmojiSmileyFilledIcon);
export default ForwardRef;
