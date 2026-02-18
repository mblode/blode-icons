import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CrownIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth={2} d="M4.0025 16.6119 2 7l6 3 4-6 4 6 6-3-2.0025 9.6119C19.7077 18.003 18.4816 19 17.0606 19H6.9394c-1.421 0-2.6471-.997-2.937-2.3881Z" /></svg>;
const ForwardRef = forwardRef(CrownIcon);
export default createLucideIcon('CrownIcon', ForwardRef);
