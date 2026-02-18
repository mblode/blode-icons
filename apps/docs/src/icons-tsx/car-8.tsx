import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Car8Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinejoin="round" strokeWidth={2} d="M4.5 17H4c-1.1046 0-2-.8954-2-2V8c0-1.6569 1.3432-3 3-3h9.9536c.995 0 1.9544.3709 2.6907 1.0402l3.0464 2.7695A4 4 0 0 1 22 11.7695V15c0 1.1046-.8954 2-2 2h-.5" /><path stroke="currentColor" strokeWidth={2} d="M9.5 17h5" /><circle cx={7} cy={16.75} r={2.25} stroke="currentColor" strokeWidth={2} /><circle cx={17} cy={16.75} r={2.25} stroke="currentColor" strokeWidth={2} /></svg>;
const ForwardRef = forwardRef(Car8Icon);
export default createLucideIcon('Car8Icon', ForwardRef);
