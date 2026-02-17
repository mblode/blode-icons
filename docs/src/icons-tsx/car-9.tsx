import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Car9Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 17H4c-1.1046 0-2-.8954-2-2V8c0-1.6569 1.3432-3 3-3h9.4478a3 3 0 0 1 2.796 1.9127l.6914 1.7778a2 2 0 0 0 1.1212 1.132l1.6864.6746A2 2 0 0 1 22 12.3541V15c0 1.1046-.8954 2-2 2h-.25M9.5 17h5" /><circle cx={7} cy={16.75} r={2.25} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /><circle cx={17} cy={16.75} r={2.25} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /></svg>;
const ForwardRef = forwardRef(Car9Icon);
export default createLucideIcon('Car9Icon', ForwardRef);
