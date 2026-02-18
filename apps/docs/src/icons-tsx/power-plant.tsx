import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PowerPlantIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.7215 9.6712C5.8822 8.7068 6.7165 8 7.6943 8h.6114c.9777 0 1.8121.7068 1.9728 1.6712L12 20H4zM19 3h-9c-1.1046 0-2 .8954-2 2" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 14v-2.5015c0-.4118-.4698-.647-.7995-.4004l-3.2786 2.4527L12 20h8v-8.5397c0-.4045-.4553-.6415-.7867-.4096z" /></svg>;
const ForwardRef = forwardRef(PowerPlantIcon);
export default createLucideIcon('PowerPlantIcon', ForwardRef);
