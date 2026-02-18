import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Drawer1Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 6c0-1.6569 1.3431-3 3-3h8c1.6569 0 3 1.3431 3 3v10c0 1.6569-1.3431 3-3 3H8c-1.6569 0-3-1.3431-3-3zM18 11H5M7 19v2M17 19v2M10 7h4M10 15h4" /></svg>;
const ForwardRef = forwardRef(Drawer1Icon);
export default createLucideIcon('Drawer1Icon', ForwardRef);
