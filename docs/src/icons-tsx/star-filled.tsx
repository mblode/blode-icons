import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const StarFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M13.9106 2.1963c-.7687-1.595-3.0516-1.595-3.8203 0L8.0752 6.3775a.118.118 0 0 1-.0917.0634l-4.639.6055c-1.7548.229-2.4873 2.3917-1.1793 3.6211l3.3936 3.1896a.1.1 0 0 1 .0316.0921l-.8519 4.5555c-.33 1.7647 1.5437 3.0701 3.0894 2.2394l4.1124-2.2099a.128.128 0 0 1 .1202 0l4.1125 2.2099c1.5457.8307 3.4194-.4747 3.0894-2.2394l-.852-4.5555a.101.101 0 0 1 .0316-.0921l3.3936-3.1896c1.3081-1.2294.5755-3.392-1.1792-3.621l-4.639-.6055a.118.118 0 0 1-.0917-.0635z" /></svg>;
const ForwardRef = forwardRef(StarFilledIcon);
export default createLucideIcon('StarFilledIcon', ForwardRef);
