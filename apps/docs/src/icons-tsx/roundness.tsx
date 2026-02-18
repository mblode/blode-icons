import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const RoundnessIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="none" viewBox="0 0 32 32" ref={ref} {...props}><path fill="currentColor" d="M28 25.3333V28h-2.6667v-2.6667zm-5.3333 0V28H20v-2.6667zm-5.3334 0V28h-2.6666v-2.6667zm-5.3333 0V28H9.3333v-2.6667zm-5.3333 0V28H4v-2.6667zM28 20v2.6667h-2.6667V20zM6.6667 20v2.6667H4V20zm0-5.3333v2.6666H4v-2.6666zM21.3333 4c3.5832 0 6.509 2.8316 6.6606 6.3776l.0061.2891v6.6666h-2.6667v-6.6666c0-2.1215-1.6737-3.871-3.7658-3.9932l-.2342-.0068h-6.6666V4zM6.6667 9.3333V12H4V9.3333zm0-5.3333v2.6667H4V4zM12 4v2.6667H9.3333V4z" /></svg>;
const ForwardRef = forwardRef(RoundnessIcon);
export default createLucideIcon('RoundnessIcon', ForwardRef);
