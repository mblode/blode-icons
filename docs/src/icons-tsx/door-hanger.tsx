import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const DoorHangerIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6.1155 7.3895C5.9831 8.2717 6.7232 9 7.6154 9v0c.7647 0 1.361-.6265 1.504-1.3777C9.3947 6.174 10.1947 5 12 5c1.6569 0 3 1.3431 3 3v.117c0 1.7217-1.1017 3.2502-2.7351 3.7947l-3.5298 1.1766C7.1017 13.6328 6 15.1613 6 16.883V19c0 1.6569 1.3431 3 3 3h6c1.6569 0 3-1.3431 3-3V8c0-3.3137-2.6863-6-6-6-3.4637 0-5.409 2.2212-5.8845 5.3895" style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(DoorHangerIcon);
export default createLucideIcon('DoorHangerIcon', ForwardRef);
