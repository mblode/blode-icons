import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ArrowCornerUpLeftIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 19v-7c0-1.6569-1.3431-3-3-3H5m3 4L4 9l4-4" /></svg>;
const ForwardRef = forwardRef(ArrowCornerUpLeftIcon);
export default createLucideIcon('ArrowCornerUpLeftIcon', ForwardRef);
