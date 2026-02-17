import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const H3Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5v7m0 0v7m0-7H3m0-7v7m0 0v7m15.2676-7c.3458-.5978.9921-1 1.7324-1 1.1046 0 2 .8954 2 2s-.8954 2-2 2c1.1046 0 2 .8954 2 2s-.8954 2-2 2c-.7403 0-1.3866-.4022-1.7324-1" /></svg>;
const ForwardRef = forwardRef(H3Icon);
export default createLucideIcon('H3Icon', ForwardRef);
