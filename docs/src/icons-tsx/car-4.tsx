import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Car4Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeWidth={2} d="M19.4989 17h.5c1.1046 0 2-.8954 2-2v-2.4586c0-1.4665-1.0602-2.7181-2.5068-2.9592l-2.7027-.4505a2 2 0 0 1-1.2712-.7728L13.8989 6.2a3 3 0 0 0-2.4-1.2H6.5403c-1.4665 0-2.718 1.0602-2.9591 2.5068L2.387 14.6712C2.1839 15.8903 3.124 17 4.3599 17h.139" /><circle cx={7} cy={16.75} r={2.25} stroke="currentColor" strokeWidth={2} /><circle cx={17} cy={16.75} r={2.25} stroke="currentColor" strokeWidth={2} /><path stroke="currentColor" strokeWidth={2} d="M9.5 17h5" /></svg>;
const ForwardRef = forwardRef(Car4Icon);
export default createLucideIcon('Car4Icon', ForwardRef);
