import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CookingIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 14.2961c-1.4796.5202-2.5 1.3183-2.5 2.6205-.0002 4.3642 11.8784 4.708 16.5 3.4614m-3.5-2.3918c1.883-.0931 5.9986-.6865 5.9852-2.6485-.008-1.158-1.8647-1.6883-3.9852-1.8099M12.4141 9.0747 14.3097 2" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.351 12.6449c.5003-1.8671 2.3327-3.516 3.9331-3.0872s2.3628 2.773 1.8625 4.6401-2.3327 3.5161-3.933 3.0873c-1.6004-.4289-2.3628-2.7731-1.8625-4.6402" /></svg>;
const ForwardRef = forwardRef(CookingIcon);
export default createLucideIcon('CookingIcon', ForwardRef);
