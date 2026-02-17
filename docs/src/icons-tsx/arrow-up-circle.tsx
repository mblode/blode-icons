import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ArrowUpCircleIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 16V8m0 0-3 3m3-3 3 3m-3-8c4.9706 0 9 4.0294 9 9s-4.0294 9-9 9-9-4.0294-9-9 4.0294-9 9-9" /></svg>;
const ForwardRef = forwardRef(ArrowUpCircleIcon);
export default createLucideIcon('ArrowUpCircleIcon', ForwardRef);
