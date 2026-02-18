import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SettingsSliderThreeIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.9512 20.004v-6.0025m0-4.0015V3.997m6.0486 16.0068v-7.0033m0-4.0014v-5.002m6.0486 16.0065V16.002m0-4.0012V3.9971M3.9961 14.0015h3.9103m2.1382-5.0025h3.9104m2.1382 7.003h3.9103" /></svg>;
const ForwardRef = forwardRef(SettingsSliderThreeIcon);
export default createLucideIcon('SettingsSliderThreeIcon', ForwardRef);
