import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Cloud2FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M10 3.5c1.6322 0 3.113.6535 4.1934 1.71.0685.067.19.1134.3242.0937A5 5 0 0 1 15.25 5.25c2.7614 0 5 2.2386 5 5 0 .1618.0993.3332.2383.4131C21.9869 11.5242 23 13.1429 23 15c0 2.7614-2.2386 5-5 5H7c-3.3137 0-6-2.6863-6-6 0-2.1876 1.171-4.1013 2.916-5.1484a.315.315 0 0 0 .1475-.2207C4.485 5.729 6.9809 3.5 10 3.5" /></svg>;
const ForwardRef = forwardRef(Cloud2FilledIcon);
export default createLucideIcon('Cloud2FilledIcon', ForwardRef);
