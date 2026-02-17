import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ExpandSimple2Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 18h3c1.1046 0 2-.8954 2-2v-3M6 11V8c0-1.1046.8954-2 2-2h3" /></svg>;
const ForwardRef = forwardRef(ExpandSimple2Icon);
export default createLucideIcon('ExpandSimple2Icon', ForwardRef);
