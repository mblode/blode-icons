import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const SettingsGear2Icon = (
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
      d="m7.6767 5.3254-.3716-.0857a1.7223 1.7223 0 0 0-2.0655 2.0655l.0858.3715a2.41 2.41 0 0 1-1.0116 2.5474l-.565.3767a1.6816 1.6816 0 0 0 0 2.7984l.565.3767a2.41 2.41 0 0 1 1.0116 2.5474l-.0857.3716a1.7222 1.7222 0 0 0 2.0655 2.0655l.3715-.0858a2.41 2.41 0 0 1 2.5474 1.0116l.3767.565a1.6816 1.6816 0 0 0 2.7984 0l.3767-.565a2.41 2.41 0 0 1 2.5474-1.0116l.3716.0858a1.7224 1.7224 0 0 0 2.0655-2.0655l-.0858-.3716a2.41 2.41 0 0 1 1.0116-2.5474l.565-.3767a1.6816 1.6816 0 0 0 0-2.7984l-.565-.3767a2.41 2.41 0 0 1-1.0116-2.5474l.0858-.3716a1.7225 1.7225 0 0 0-2.0655-2.0655l-.3716.0858a2.41 2.41 0 0 1-2.5474-1.0116l-.3767-.565a1.6816 1.6816 0 0 0-2.7984 0l-.3767.565a2.41 2.41 0 0 1-2.5474 1.0116Z"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
      d="M15 12c0 1.6569-1.3431 3-3 3s-3-1.3431-3-3 1.3431-3 3-3 3 1.3431 3 3Z"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(SettingsGear2Icon);
export default ForwardRef;
