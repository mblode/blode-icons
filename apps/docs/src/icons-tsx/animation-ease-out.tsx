import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const AnimationEaseOutIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 4C10.9388 5.9668 5.9668 10.9388 4 20" /></svg>;
const ForwardRef = forwardRef(AnimationEaseOutIcon);
export default createLucideIcon('AnimationEaseOutIcon', ForwardRef);
