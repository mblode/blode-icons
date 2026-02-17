import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const GhostIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="square" strokeWidth={2} d="M9.4 10.5h.2m4.8 0h.2M5 20.0568V10c0-3.866 3.134-7 7-7s7 3.134 7 7v10.0568c0 .8134-.9194 1.2865-1.5812.8137l-.545-.3892a3 3 0 0 0-2.9255-.3163l-1.5544.6662a1 1 0 0 1-.7878 0l-1.5544-.6662a3 3 0 0 0-2.9255.3163l-.545.3892C5.9194 21.3433 5 20.8702 5 20.0568ZM10 10.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm5 0a.5.5 0 1 1-1.0001-.0001A.5.5 0 0 1 15 10.5Z" /></svg>;
const ForwardRef = forwardRef(GhostIcon);
export default createLucideIcon('GhostIcon', ForwardRef);
