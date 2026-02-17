import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const IceHockeyIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeWidth={2} d="M22 9.5c0 1.933-4.4772 3.5-10 3.5S2 11.433 2 9.5m20 0C22 7.567 17.5228 6 12 6S2 7.567 2 9.5m20 0v5c0 1.933-4.4772 3.5-10 3.5S2 16.433 2 14.5v-5" /></svg>;
const ForwardRef = forwardRef(IceHockeyIcon);
export default createLucideIcon('IceHockeyIcon', ForwardRef);
