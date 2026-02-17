import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CornerRadiusIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 4h-3.2c-4.4804 0-6.7206 0-8.432.872a8 8 0 0 0-3.496 3.496C4 10.0795 4 12.3197 4 16.8V20" /></svg>;
const ForwardRef = forwardRef(CornerRadiusIcon);
export default createLucideIcon('CornerRadiusIcon', ForwardRef);
