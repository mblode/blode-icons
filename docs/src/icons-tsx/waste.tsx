import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const WasteIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 21H8.8067c-1.5794 0-2.8883-1.2245-2.9934-2.8004L5 6l1.1094-1.6641A3 3 0 0 1 8.6055 3h6.7889a3 3 0 0 1 2.4962 1.3359L19 6l-.75 10.5M4 6h16" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 18.75c0 1.3807-1.1193 2.5-2.5 2.5s-2.5-1.1193-2.5-2.5 1.1193-2.5 2.5-2.5 2.5 1.1193 2.5 2.5" /></svg>;
const ForwardRef = forwardRef(WasteIcon);
export default createLucideIcon('WasteIcon', ForwardRef);
