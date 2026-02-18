import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BlossomIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7.5 12C5.0147 12 3 9.9853 3 7.5S5.0147 3 7.5 3 12 5.0147 12 7.5M7.5 12C5.0147 12 3 14.0147 3 16.5S5.0147 21 7.5 21s4.5-2.0147 4.5-4.5M7.5 12H9m3-4.5C12 5.0147 14.0147 3 16.5 3S21 5.0147 21 7.5 18.9853 12 16.5 12M12 7.5V9m4.5 3c2.4853 0 4.5 2.0147 4.5 4.5S18.9853 21 16.5 21 12 18.9853 12 16.5m4.5-4.5H15m-3 4.5V15" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15c1.6569 0 3-1.3431 3-3s-1.3431-3-3-3-3 1.3431-3 3 1.3431 3 3 3M9.5 9.5 8 8m6.5 1.5L16 8m-1.5 6.5L16 16m-6.5-1.5L8 16" /></svg>;
const ForwardRef = forwardRef(BlossomIcon);
export default createLucideIcon('BlossomIcon', ForwardRef);
