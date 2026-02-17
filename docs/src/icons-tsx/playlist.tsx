import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PlaylistIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.998 17.5c0 1.3807-1.3431 2.5-3 2.5s-3-1.1193-3-2.5 1.3432-2.5 3-2.5 3 1.1193 3 2.5m0 0V5M3 6h13M3 12h8m-8 6h6" /></svg>;
const ForwardRef = forwardRef(PlaylistIcon);
export default createLucideIcon('PlaylistIcon', ForwardRef);
