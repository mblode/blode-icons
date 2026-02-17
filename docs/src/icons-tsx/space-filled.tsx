import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const SpaceFilledIcon = (
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
      d="M12 2C6.4772 2 2 6.4772 2 12c0 2.5605.9637 4.8984 2.5466 6.6669C6.3762 20.7111 9.0382 22 12 22s5.6238-1.2889 7.4535-3.3331C21.0363 16.8984 22 14.5605 22 12c0-5.5228-4.4772-10-10-10m0 14c2.029 0 3.8808.7544 5.2917 2-1.4109 1.2456-3.2627 2-5.2917 2s-3.8808-.7544-5.2917-2C8.1193 16.7544 9.971 16 12 16m-1.3157-8.0921-1.2899.6449c-.3685.1843-.3685.7102 0 .8944l1.2899.6449a.5.5 0 0 1 .2236.2236l.6449 1.2899c.1842.3685.7102.3685.8944 0l.6449-1.2899a.5.5 0 0 1 .2236-.2236l1.2899-.6449c.3685-.1843.3685-.7102 0-.8944l-1.2899-.645a.5.5 0 0 1-.2236-.2235l-.6449-1.2899c-.1842-.3685-.7102-.3685-.8944 0l-.6449 1.2899a.5.5 0 0 1-.2236.2236"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SpaceFilledIcon);
export default ForwardRef;
