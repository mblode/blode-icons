import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ArrowFromLineDownIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.25 15.75 12 20l-4.25-4.25M19 4H5M12 8v11" /></svg>;
const ForwardRef = forwardRef(ArrowFromLineDownIcon);
export default createLucideIcon('ArrowFromLineDownIcon', ForwardRef);
