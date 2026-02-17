import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const DropIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinejoin="round" strokeWidth={2} d="M19 14c0 3.866-3.134 7-7 7s-7-3.134-7-7c0-4.0086 3.7184-8.3784 5.735-10.4535.703-.7234 1.827-.7234 2.53 0C15.2816 5.6215 19 9.9914 19 14Z" /></svg>;
const ForwardRef = forwardRef(DropIcon);
export default createLucideIcon('DropIcon', ForwardRef);
