import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BezierFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M5.5 3C4.1193 3 3 4.1193 3 5.5v1c0 1.2095.8589 2.2184 2 2.45v6.1c-1.1411.2316-2 1.2405-2 2.45v1C3 19.8807 4.1193 21 5.5 21h1c1.2095 0 2.2184-.8589 2.45-2h6.1c.2316 1.1411 1.2405 2 2.45 2h1c1.3807 0 2.5-1.1193 2.5-2.5v-1c0-1.2095-.8589-2.2184-2-2.45v-6.1c1.1411-.2316 2-1.2405 2-2.45v-1C21 4.1193 19.8807 3 18.5 3h-1c-1.2095 0-2.2184.8589-2.45 2h-6.1C8.7184 3.8589 7.7095 3 6.5 3zM7 15.05v-6.1c.9796-.1988 1.7512-.9704 1.95-1.95h6.1c.1988.9796.9704 1.7512 1.95 1.95v6.1c-.9796.1988-1.7512.9704-1.95 1.95h-6.1c-.1988-.9796-.9704-1.7512-1.95-1.95" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(BezierFilledIcon);
export default createLucideIcon('BezierFilledIcon', ForwardRef);
