import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ArCube2Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12.0002 12 12 4m.0002 8-7.1113 4m7.1113-4 7.1109 4M20 14.7454V9.2545a3 3 0 0 0-1.5292-2.6147l-5-2.8125a3 3 0 0 0-2.9416 0l-5 2.8125A3 3 0 0 0 4 9.2545v5.4909a3 3 0 0 0 1.5292 2.6148l5 2.8125a3 3 0 0 0 2.9416 0l5-2.8125A3 3 0 0 0 20 14.7454" /></svg>;
const ForwardRef = forwardRef(ArCube2Icon);
export default createLucideIcon('ArCube2Icon', ForwardRef);
