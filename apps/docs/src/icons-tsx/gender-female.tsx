import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const GenderFemaleIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><circle cx={12} cy={8.5} r={5.5} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v6M9 18h6" /></svg>;
const ForwardRef = forwardRef(GenderFemaleIcon);
export default createLucideIcon('GenderFemaleIcon', ForwardRef);
