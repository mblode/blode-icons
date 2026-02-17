import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ArrowSplitIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 9V4m0 0h5M4 4l8 8m3-8h5m0 0v5m0-5-8 8m0 0v8" /></svg>;
const ForwardRef = forwardRef(ArrowSplitIcon);
export default createLucideIcon('ArrowSplitIcon', ForwardRef);
