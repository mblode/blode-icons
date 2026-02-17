import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ChevronDoubleDownIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m8 13.5 2.9393 2.9393c.5858.5858 1.5356.5858 2.1214 0L16 13.5m-8-7 2.9393 2.9393c.5858.5858 1.5356.5858 2.1214 0L16 6.5" /></svg>;
const ForwardRef = forwardRef(ChevronDoubleDownIcon);
export default createLucideIcon('ChevronDoubleDownIcon', ForwardRef);
