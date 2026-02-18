import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const GalaxyIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M2 10.9411c2.5-7.0953 16-6.0038 16-.184 0 3.2838-6.0574 3.968-7.2847 2.3049-.2489-.3374.0463-.7477.4399-.8923l1.6896-.6207c.3936-.1446.6888-.5549.4399-.8923C12.0574 8.9935 6 9.6777 6 12.9614c0 6.0899 14.5 7.2585 16 .163" /></svg>;
const ForwardRef = forwardRef(GalaxyIcon);
export default createLucideIcon('GalaxyIcon', ForwardRef);
