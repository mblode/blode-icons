import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const LawIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v17m0 0H7m5 0h5M3 6h4.2918a3 3 0 0 0 1.3416-.3167l.7332-.3666A3 3 0 0 1 10.7082 5h2.5836c.4657 0 .9251.1084 1.3416.3167l.7332.3666A3 3 0 0 0 16.7082 6H21M5.5 6l-2.2193 6.658c-.4536 1.3606.1073 2.9764 1.5275 3.1758a4.94 4.94 0 0 0 1.3836 0c1.4202-.1994 1.981-1.8152 1.5275-3.1758zm13 0-2.2193 6.658c-.4536 1.3606.1073 2.9764 1.5275 3.1758a4.94 4.94 0 0 0 1.3836 0c1.4202-.1994 1.9811-1.8152 1.5275-3.1758z" /></svg>;
const ForwardRef = forwardRef(LawIcon);
export default createLucideIcon('LawIcon', ForwardRef);
