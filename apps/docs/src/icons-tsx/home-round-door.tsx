import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const HomeRoundDoorIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinejoin="round" strokeWidth={2} d="M9.5 16.5V20H7c-1.6569 0-3-1.3431-3-3v-6.4617a3 3 0 0 1 1.249-2.436l5.0001-3.5938a3 3 0 0 1 3.5018 0l5 3.5937A3 3 0 0 1 20 10.5383V17c0 1.6569-1.3431 3-3 3h-2.5v-3.5c0-1.3807-1.1193-2.5-2.5-2.5s-2.5 1.1193-2.5 2.5Z" /></svg>;
const ForwardRef = forwardRef(HomeRoundDoorIcon);
export default createLucideIcon('HomeRoundDoorIcon', ForwardRef);
