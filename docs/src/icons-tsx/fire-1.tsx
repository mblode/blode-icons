import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Fire1Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinejoin="round" strokeWidth={2} d="M19.5 13.8122c0 9.5785-15 9.589-15 0C4.5 6.6135 12 2.5 12 2.5s7.5 4.1135 7.5 11.3122Z" /><path stroke="currentColor" strokeLinejoin="round" strokeWidth={2} d="M15.5 17.4061c0 4.7893-7 4.7945-7 0C8.5 13.8068 12 11.75 12 11.75s3.5 2.0568 3.5 5.6561Z" /></svg>;
const ForwardRef = forwardRef(Fire1Icon);
export default createLucideIcon('Fire1Icon', ForwardRef);
