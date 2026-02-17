import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Nfc1Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M7.2188 7.3353C8.326 8.5735 8.9993 10.2081 8.9993 12s-.6732 3.4264-1.7805 4.6646m3.2076-11.735c1.6058 1.912 2.5729 4.3783 2.5729 7.0704 0 2.6922-.9671 5.1584-2.5729 7.0703m2.8631-16.288C15.5994 5.2448 16.9993 8.4698 16.9993 12s-1.3999 6.7551-3.7098 9.2177" /></svg>;
const ForwardRef = forwardRef(Nfc1Icon);
export default createLucideIcon('Nfc1Icon', ForwardRef);
