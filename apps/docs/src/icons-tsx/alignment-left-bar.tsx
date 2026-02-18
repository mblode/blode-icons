import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const AlignmentLeftBarIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5v14M9 6h12M9 12h12M9 18h7" /></svg>;
const ForwardRef = forwardRef(AlignmentLeftBarIcon);
export default createLucideIcon('AlignmentLeftBarIcon', ForwardRef);
