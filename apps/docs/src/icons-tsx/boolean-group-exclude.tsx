import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BooleanGroupExcludeIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><rect width={12} height={12} x={9} y={3} stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth={2} rx={3} /><rect width={12} height={12} x={3} y={9} stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth={2} rx={3} /></svg>;
const ForwardRef = forwardRef(BooleanGroupExcludeIcon);
export default createLucideIcon('BooleanGroupExcludeIcon', ForwardRef);
