import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const VariablesFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M9.999 2.7498a4 4 0 0 1 4 0l5.0108 2.893a4 4 0 0 1 2 3.464v5.7859a4 4 0 0 1-2 3.4641l-5.0108 2.893a4 4 0 0 1-4 0l-5.0107-2.893a4 4 0 0 1-2-3.4641V9.1068a4 4 0 0 1 2-3.464zm-.5 9.25c0-1.3808 1.1193-2.5 2.5-2.5s2.5 1.1192 2.5 2.5-1.1193 2.5-2.5 2.5-2.5-1.1193-2.5-2.5" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(VariablesFilledIcon);
export default createLucideIcon('VariablesFilledIcon', ForwardRef);
