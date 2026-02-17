import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const UnderlineIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M6 21h12M6 4v8c0 3.3137 2.6863 6 6 6s6-2.6863 6-6V4" /></svg>;
const ForwardRef = forwardRef(UnderlineIcon);
export default createLucideIcon('UnderlineIcon', ForwardRef);
