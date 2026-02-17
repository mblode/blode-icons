import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Write2FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M10.9345 5.6445c-.3843-.9913-.1764-2.1592.6236-2.9592 1.0809-1.0809 2.8333-1.0809 3.9142 0l5.9853 5.9853c1.0809 1.0809 1.0809 2.8333 0 3.9142-.8032.8032-1.9773 1.0095-2.971.619l-2.5551 5.3918a4 4 0 0 1-3.0896 2.2525l-9.374 1.2412 6.0144-6.0144c.1652.0441.3389.0677.5181.0677 1.1045 0 2-.8954 2-2s-.8955-2-2-2-2 .8954-2 2c0 .1792.0235.3528.0677.518L2.0508 20.678l1.179-9.4054a4 4 0 0 1 2.295-3.1354zm9.1089 5.5261a.768.768 0 0 1-1.0858 0l-5.9853-5.9853a.7678.7678 0 0 1 1.0858-1.0858l5.9853 5.9853a.768.768 0 0 1 0 1.0858" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(Write2FilledIcon);
export default createLucideIcon('Write2FilledIcon', ForwardRef);
