import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const MedicinePillIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.4541 10.0962c1.1568-1.7812.9542-4.188-.6079-5.75-1.7949-1.795-4.7051-1.795-6.5 0l-6 6c-1.795 1.7949-1.795 4.7051 0 6.5 1.562 1.5621 3.9688 1.7647 5.75.6079M7.5 7.5 11 11" /><circle cx={15.5} cy={15.5} r={5.5} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m16.5 20.5-2-10" /></svg>;
const ForwardRef = forwardRef(MedicinePillIcon);
export default createLucideIcon('MedicinePillIcon', ForwardRef);
