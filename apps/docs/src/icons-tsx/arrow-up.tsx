import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ArrowUpIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="lucide lucide-arrow-up" viewBox="0 0 24 24" ref={ref} {...props}><path d="m5 12 7-7 7 7M12 19V5" /></svg>;
const ForwardRef = forwardRef(ArrowUpIcon);
export default createLucideIcon('ArrowUpIcon', ForwardRef);
