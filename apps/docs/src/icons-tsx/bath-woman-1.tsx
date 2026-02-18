import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BathWoman1Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><circle cx={12} cy={4} r={2} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.001 22v-3h1.2192c.6506 0 1.1279-.6114.9701-1.2425l-1.6212-6.4851C15.2352 9.9369 14.0352 9 12.6586 9h-1.3153c-1.3766 0-2.5766.9369-2.9104 2.2724l-1.6213 6.4851C6.6538 18.3886 7.1312 19 7.7817 19H9.001v3" /></svg>;
const ForwardRef = forwardRef(BathWoman1Icon);
export default createLucideIcon('BathWoman1Icon', ForwardRef);
