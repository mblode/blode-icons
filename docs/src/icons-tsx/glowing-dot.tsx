import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const GlowingDotIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 12" ref={ref} {...props}><circle cx={6} cy={6} r={6} fill="currentColor" fillOpacity={0.15} /><circle cx={6} cy={6} r={4} fill="currentColor" /></svg>;
const ForwardRef = forwardRef(GlowingDotIcon);
export default createLucideIcon('GlowingDotIcon', ForwardRef);
