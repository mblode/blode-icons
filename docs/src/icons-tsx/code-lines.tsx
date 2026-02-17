import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CodeLinesIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h10m5 0h3M3 12h5m5 0h8M3 19h7m5 0h6" /></svg>;
const ForwardRef = forwardRef(CodeLinesIcon);
export default createLucideIcon('CodeLinesIcon', ForwardRef);
