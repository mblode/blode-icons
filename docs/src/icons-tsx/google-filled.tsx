import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const GoogleFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M21.5844 12.2273c0-.7091-.0636-1.3909-.1818-2.0455h-9.4182v3.8728h5.3818c-.2364 1.2454-.9455 2.3-2.0091 3.0091v2.5181h3.2455c1.8909-1.7454 2.9818-4.3091 2.9818-7.3545" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" d="M11.982 22c2.7 0 4.9636-.8909 6.6182-2.4182l-3.2455-2.5182c-.8909.6-2.0273.9636-3.3727.9636-2.6 0-4.8091-1.7545-5.6-4.1181H3.0547v2.5818C4.7 19.7545 8.0729 22 11.982 22" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" d="M6.3844 13.9c-.2-.6-.3182-1.2363-.3182-1.9s.1182-1.3.3182-1.9V7.5182H3.057C2.3753 8.8636 1.9844 10.3818 1.9844 12s.3909 3.1364 1.0727 4.4818l2.591-2.0181z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" d="M11.982 5.9818c1.4727 0 2.7818.5091 3.8272 1.491l2.8637-2.8637C16.9365 2.9909 14.682 2 11.982 2 8.0729 2 4.7001 4.2455 3.0547 7.5182L6.382 10.1c.7909-2.3636 3-4.1182 5.6-4.1182" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(GoogleFilledIcon);
export default createLucideIcon('GoogleFilledIcon', ForwardRef);
