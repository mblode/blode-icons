import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const EscIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7.0233 4.5C4.5983 6.1124 3 8.8695 3 12c0 4.9706 4.0294 9 9 9s9-4.0294 9-9c0-3.1305-1.5983-5.8876-4.0233-7.5M12 2v5" /></svg>;
const ForwardRef = forwardRef(EscIcon);
export default createLucideIcon('EscIcon', ForwardRef);
