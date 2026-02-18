import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Podcast2Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.7085 18c3.1662-3.5337 3.0513-8.9681-.3445-12.364-3.5148-3.5147-9.2132-3.5147-12.728 0C2.2402 9.032 2.1253 14.4663 5.2915 18" /><rect width={6} height={8} x={9} y={8} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} rx={3} /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 16v4m0 0h-2m2 0h2" /></svg>;
const ForwardRef = forwardRef(Podcast2Icon);
export default createLucideIcon('Podcast2Icon', ForwardRef);
