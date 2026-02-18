import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ArrowExpandVerIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m8 6 4-4m0 0 4 4m-4-4v20m-4-4 4 4m0 0 4-4" /></svg>;
const ForwardRef = forwardRef(ArrowExpandVerIcon);
export default createLucideIcon('ArrowExpandVerIcon', ForwardRef);
