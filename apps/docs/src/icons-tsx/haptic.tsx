import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const HapticIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M3 17c1.52 0 3.0152-2 4.5-2 1.5054 0 3.0003 2 4.5 2 1.4902 0 2.9851-2 4.5-2 1.4764 0 2.9718 2 4.5 2M3 9c1.52 0 3.0152-2 4.5-2 1.5054 0 3.0003 2 4.5 2 1.4902 0 2.9851-2 4.5-2 1.4764 0 2.9718 2 4.5 2" /></svg>;
const ForwardRef = forwardRef(HapticIcon);
export default createLucideIcon('HapticIcon', ForwardRef);
