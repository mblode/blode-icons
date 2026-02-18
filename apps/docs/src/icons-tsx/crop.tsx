import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CropIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6h12c1.6569 0 3 1.3431 3 3v12M6 3v12c0 1.6569 1.3431 3 3 3h12" /></svg>;
const ForwardRef = forwardRef(CropIcon);
export default createLucideIcon('CropIcon', ForwardRef);
