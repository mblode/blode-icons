import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ZipIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 4.1707C4.8348 4.5825 4 5.6937 4 7v10c0 1.6569 1.3432 3 3 3h10c1.6569 0 3-1.3431 3-3V7c0-1.3063-.8348-2.4175-2-2.8293M10 4h4m-4 4h4m-4 4h4v2c0 1.1046-.8954 2-2 2s-2-.8954-2-2z" /></svg>;
const ForwardRef = forwardRef(ZipIcon);
export default createLucideIcon('ZipIcon', ForwardRef);
