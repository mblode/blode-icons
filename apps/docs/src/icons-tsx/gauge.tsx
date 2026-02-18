import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const GaugeIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 10 5.75 5.75M12 5V3c4.9706 0 9 4.0294 9 9s-4.0294 9-9 9-9-4.0294-9-9c0-1.0519.1805-2.0617.5121-3M14.5 12c0 1.3807-1.1193 2.5-2.5 2.5S9.5 13.3807 9.5 12s1.1193-2.5 2.5-2.5 2.5 1.1193 2.5 2.5" /></svg>;
const ForwardRef = forwardRef(GaugeIcon);
export default createLucideIcon('GaugeIcon', ForwardRef);
