import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BitcoinIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 8.5V12m0-3.5h3.25c.9665 0 1.75.7835 1.75 1.75S14.2165 12 13.25 12M10 8.5H8.5M10 12v3.5m0-3.5h3.25M10 15.5H8.5m1.5 0h3.25c.9665 0 1.75-.7835 1.75-1.75S14.2165 12 13.25 12M12 7v1.5m0 7V17m9-5c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9" /></svg>;
const ForwardRef = forwardRef(BitcoinIcon);
export default createLucideIcon('BitcoinIcon', ForwardRef);
