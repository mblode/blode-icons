import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ElectrocardiogramFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M10.9364 3.6622c-.5007-2.0236-3.3761-2.0271-3.8817-.0047L5.598 9.4845a2 2 0 0 1-1.9403 1.5149H2c-.5523 0-1 .4477-1 1s.4477 1 1 1h1.6577c1.8354 0 3.4354-1.2492 3.8805-3.0299l1.4568-5.827 4.0586 16.4036c.5019 2.0286 3.3869 2.0252 3.884-.0047l1.4738-6.0178a2 2 0 0 1 1.9426-1.5242H22c.5523 0 1-.4478 1-1s-.4477-1-1-1h-1.646c-1.8427 0-3.4469 1.2587-3.8852 3.0485l-1.4738 6.0178z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(ElectrocardiogramFilledIcon);
export default createLucideIcon('ElectrocardiogramFilledIcon', ForwardRef);
