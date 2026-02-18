import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const RainyIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m11.5 18-1 2m-4-2-1 2m11-2-1 2m-6-6H16c2.2091 0 4-1.7909 4-4s-1.7909-4-4-4q-.2751.0002-.5405.0362c-.5317.0718-1.091-.1529-1.3901-.5983C13.0822 3.9676 11.4041 3 9.5 3 6.4624 3 4 5.4624 4 8.5S6.4624 14 9.5 14" /></svg>;
const ForwardRef = forwardRef(RainyIcon);
export default createLucideIcon('RainyIcon', ForwardRef);
