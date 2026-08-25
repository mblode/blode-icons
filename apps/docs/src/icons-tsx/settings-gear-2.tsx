import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

import { createLucideIcon } from "./create-lucide-icon";
const SettingsGear2Icon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      d="m7.6767 5.3254-.3716-.0857A1.722 1.722 0 0 0 5.7 5.7a1.722 1.722 0 0 0-.4603 1.6052l.0857.3715a2.41 2.41 0 0 1-1.0116 2.5474l-.565.3767a1.6816 1.6816 0 0 0 .0001 2.7984l.565.3767a2.41 2.41 0 0 1 1.0115 2.5474l-.0857.3716a1.722 1.722 0 0 0 2.0655 2.0655l.3715-.0858a2.41 2.41 0 0 1 2.5474 1.0116l.3767.565a1.6816 1.6816 0 0 0 2.7984 0l.3767-.565a2.41 2.41 0 0 1 2.5474-1.0116l.3716.0858a1.7224 1.7224 0 0 0 2.0655-2.0655l-.0858-.3716a2.41 2.41 0 0 1 1.0116-2.5474l.565-.3767a1.6816 1.6816 0 0 0 0-2.7984l-.565-.3767a2.41 2.41 0 0 1-1.0116-2.5474l.0858-.3716a1.7225 1.7225 0 0 0-2.0655-2.0654l-.3716.0857a2.41 2.41 0 0 1-2.5474-1.0116l-.3767-.565a1.6816 1.6816 0 0 0-2.7984.0001l-.3767.565a2.41 2.41 0 0 1-2.5474 1.0115Z"
    />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      d="M15 12c0 1.6569-1.3431 3-3 3s-3-1.3431-3-3 1.3431-3 3-3 3 1.3431 3 3Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SettingsGear2Icon);
export default createLucideIcon("SettingsGear2Icon", ForwardRef);
