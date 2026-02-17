import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const AudioBarsIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M4 16V8m4 10V6m4 15V3m4 15V6m4 10V8" /></svg>;
const ForwardRef = forwardRef(AudioBarsIcon);
export default ForwardRef;
