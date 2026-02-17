import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const LifeVestIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 0v4m0-4h-2m2 0h2m-2 4v4m0-4H4m8 0h8M8 3c0 5.1588 8 5.1588 8 0 0 2.0156-.0311 4.5723 1.2748 5.9707C18.4056 10.1816 20 11.343 20 13v4c0 1.6569-1.3431 3-3 3H7c-1.6569 0-3-1.3431-3-3v-4c0-1.6569 1.5944-2.8184 2.7253-4.0293C8.031 7.5723 8 5.0155 8 3" /></svg>;
const ForwardRef = forwardRef(LifeVestIcon);
export default createLucideIcon('LifeVestIcon', ForwardRef);
