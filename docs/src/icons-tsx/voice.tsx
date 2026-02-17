import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const VoiceIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M8 4v16M4 10v4m8-6v8m4-10v12m4-8v4" /></svg>;
const ForwardRef = forwardRef(VoiceIcon);
export default createLucideIcon('VoiceIcon', ForwardRef);
