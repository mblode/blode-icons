import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Car5EvIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeWidth={2} d="M19.4989 17h1.5c.5523 0 1-.4477 1-1v-1.6439a6 6 0 0 0-1.6032-4.0827l-3.1164-3.3561A6 6 0 0 0 12.8825 5H6.5403c-1.4665 0-2.718 1.0602-2.9591 2.5068L2.387 14.6712C2.1839 15.8903 3.124 17 4.3599 17h.139" /><circle cx={7} cy={16.75} r={2.25} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /><circle cx={17} cy={16.75} r={2.25} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.5 17h5" /><path fill="currentColor" d="M13.9949 9.9994h-2.0766l.2863-2.0618c.0354-.2543-.2898-.3903-.446-.1865l-2.9487 3.8461c-.1261.1645-.0089.4022.1984.4022h2.0766l-.2863 2.0617c-.0353.2544.2898.3903.446.1865l2.9487-3.8461c.1261-.1645.0089-.4022-.1984-.4022" /></svg>;
const ForwardRef = forwardRef(Car5EvIcon);
export default createLucideIcon('Car5EvIcon', ForwardRef);
