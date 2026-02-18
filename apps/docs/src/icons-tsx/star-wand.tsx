import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const StarWandIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={25} height={24} fill="none" viewBox="0 0 25 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.5115 15.4668 5.3615 21m12.936-11.5719 3.149 3.1531c.5769.5777.2558 1.566-.5505 1.6942l-4.4009.6999a1 1 0 0 0-.7337.5331l-2.0256 3.9692c-.3712.7272-1.4103.7272-1.7814 0l-2.0257-3.9692a1 1 0 0 0-.7336-.5331l-4.401-.6999c-.8063-.1282-1.1274-1.1165-.5504-1.6942l3.149-3.153a1 1 0 0 0 .2802-.8625l-.6943-4.4019c-.1272-.8065.7135-1.4173 1.4412-1.047l3.9719 2.0205a1 1 0 0 0 .9068 0l3.9718-2.0205c.7277-.3703 1.5684.2405 1.4412 1.047l-.6943 4.4019a1 1 0 0 0 .2803.8624" /></svg>;
const ForwardRef = forwardRef(StarWandIcon);
export default createLucideIcon('StarWandIcon', ForwardRef);
