import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const DresserIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7c0-1.6569 1.3431-3 3-3h10c1.6569 0 3 1.3431 3 3v8c0 1.6569-1.3431 3-3 3H7c-1.6569 0-3-1.3431-3-3zM20 11H4M7 19v2M17 19v2M11 7h2M11 14h2" /></svg>;
const ForwardRef = forwardRef(DresserIcon);
export default createLucideIcon('DresserIcon', ForwardRef);
