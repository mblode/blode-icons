import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const DashboardMiddleIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 16V9m0 7H4.5m7.5 0h7.5m1.5-4c0-4.9706-4.0294-9-9-9s-9 4.0294-9 9 4.0294 9 9 9 9-4.0294 9-9" /></svg>;
const ForwardRef = forwardRef(DashboardMiddleIcon);
export default createLucideIcon('DashboardMiddleIcon', ForwardRef);
