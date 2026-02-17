import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CopySimpleIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><rect width={11} height={11} x={9} y={9} stroke="currentColor" strokeWidth={2} rx={2} /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15H4c-1.1046 0-2-.8954-2-2V4c0-1.1046.8954-2 2-2h9c1.1046 0 2 .8954 2 2v1" /></svg>;
const ForwardRef = forwardRef(CopySimpleIcon);
export default createLucideIcon('CopySimpleIcon', ForwardRef);
