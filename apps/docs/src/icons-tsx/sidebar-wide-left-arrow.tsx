import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SidebarWideLeftArrowIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m15 10-2 2 2 2" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6C4.3431 5 3 6.3431 3 8v8c0 1.6569 1.3431 3 3 3h2M8 5h10c1.6569 0 3 1.3431 3 3v8c0 1.6569-1.3431 3-3 3H8M8 5v14" /></svg>;
const ForwardRef = forwardRef(SidebarWideLeftArrowIcon);
export default createLucideIcon('SidebarWideLeftArrowIcon', ForwardRef);
