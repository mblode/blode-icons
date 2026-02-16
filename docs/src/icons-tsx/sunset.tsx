import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SunsetIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 16h20M7 20h10M4 12c0-4.4183 3.5817-8 8-8s8 3.5817 8 8" /></svg>;
const ForwardRef = forwardRef(SunsetIcon);
export default ForwardRef;
