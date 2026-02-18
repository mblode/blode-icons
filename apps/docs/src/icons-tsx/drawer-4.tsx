import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Drawer4Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8c0-1.6569 1.3431-3 3-3h12c1.6569 0 3 1.3431 3 3v5c0 1.6569-1.3431 3-3 3H6c-1.6569 0-3-1.3431-3-3zM12 5v11M15 9v2M19 16.25V19M9 9v2M5 16.25V19" /></svg>;
const ForwardRef = forwardRef(Drawer4Icon);
export default createLucideIcon('Drawer4Icon', ForwardRef);
