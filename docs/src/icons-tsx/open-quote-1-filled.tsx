import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const OpenQuote1FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M17.5043 19.0001c2.4829 0 4.4957-2.0147 4.4957-4.5s-2.0128-4.5-4.4957-4.5a4.48 4.48 0 0 0-1.749.3532c.1071-.196.2236-.381.3479-.557.7851-1.111 1.9459-1.958 3.4538-2.9641.4591-.3064.5832-.9273.2771-1.3868s-.9263-.5837-1.3854-.2773c-1.4893.9937-2.951 2.0217-3.9767 3.4733-1.0544 1.492-1.593 3.3423-1.4634 5.8862.0148 2.4726 2.0219 4.4725 4.4957 4.4725M6.5147 19.0001c2.4829 0 4.4957-2.0147 4.4957-4.5s-2.0128-4.5-4.4957-4.5a4.48 4.48 0 0 0-1.749.3532c.1071-.196.2236-.381.348-.557.785-1.111 1.9458-1.958 3.4537-2.9641.4591-.3064.5832-.9273.2771-1.3868-.306-.4595-.9263-.5837-1.3854-.2773-1.4893.9937-2.951 2.0217-3.9767 3.4733-1.0544 1.492-1.593 3.3423-1.4634 5.8862.0148 2.4726 2.0219 4.4725 4.4957 4.4725" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(OpenQuote1FilledIcon);
export default createLucideIcon('OpenQuote1FilledIcon', ForwardRef);
