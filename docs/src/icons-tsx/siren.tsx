import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SirenIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 17H8c-1.6569 0-3 1.3431-3 3 0 .5523.4477 1 1 1h12c.5523 0 1-.4477 1-1 0-1.6569-1.3431-3-3-3M7 17v-5c0-2.7614 2.2386-5 5-5s5 2.2386 5 5v5M12 2v1m9 9h1M3 12H2m16.364-6.364.7071-.707m-13.435.707-.7071-.707M12 17v-3" /></svg>;
const ForwardRef = forwardRef(SirenIcon);
export default createLucideIcon('SirenIcon', ForwardRef);
