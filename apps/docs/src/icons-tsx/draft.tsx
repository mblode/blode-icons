import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const DraftIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><circle cx={6.5} cy={6} r={2} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /><circle cx={6.5} cy={18} r={2} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /><circle cx={17.5} cy={18} r={2} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6.5 8v8M17.51 6h-.01m.5 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M17.51 11.25h-.01m.5 0a.5.5 0 1 1-1.0001-.0001A.5.5 0 0 1 18 11.25" /></svg>;
const ForwardRef = forwardRef(DraftIcon);
export default createLucideIcon('DraftIcon', ForwardRef);
