import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

import { createLucideIcon } from "./create-lucide-icon";
const DribbbleFilledIcon = (
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
      fill="currentColor"
      d="M2 12q0-2.72 1.34-5.02c1.34-2.3 2.1067-2.7467 3.64-3.64S10.1867 2 12 2s3.4867.4467 5.02 1.34 2.7467 2.1067 3.64 3.64S22 10.1867 22 12s-.4467 3.4867-1.34 5.02-2.1067 2.7467-3.64 3.64S13.8133 22 12 22s-3.4867-.4467-5.02-1.34-2.7467-2.1067-3.64-3.64S2 13.8133 2 12m1.66 0q0 3.12 2.1 5.5.96-1.88 3.04-3.58c2.08-1.7 2.74-1.8467 4.06-2.14q-.3-.7-.58-1.26-3.44 1.1-7.44 1.1-.78 0-1.16-.02 0 .08-.01.2c-.01.12-.01.1467-.01.2m.26-2.06q.44.04 1.3.04 3.34 0 6.34-.9-1.52-2.7-3.34-4.5-1.58.8-2.71 2.22C4.38 8.22 4.2267 8.7933 3.92 9.94m2.98 8.64q2.26 1.76 5.1 1.76 1.48 0 2.94-.56-.4-3.42-1.56-6.62-1.84.4-3.71 2.02C7.8 16.8 7.5 17.3933 6.9 18.58M9.96 3.94q1.76 1.82 3.26 4.54 2.72-1.14 4.1-2.9Q15 3.66 12 3.66q-1.02 0-2.04.28m3.98 5.96q.3.64.68 1.62 1.48-.14 3.22-.14 1.24 0 2.46.06-.16-2.72-1.96-4.84-1.3 1.94-4.4 3.3m1.18 3.02q1.02 2.96 1.38 6.08 1.58-1.02 2.58-2.62c1-1.6 1.0667-2.22 1.2-3.46q-1.46-.1-2.66-.1-1.1 0-2.5.1"
    />
  </svg>
);
const ForwardRef = forwardRef(DribbbleFilledIcon);
export default createLucideIcon("DribbbleFilledIcon", ForwardRef);
