import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PinFlagIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 17V3l6 3.5-6 3.5m-4 4.3643c-2.9634.5727-5 1.7619-5 3.1361 0 1.933 4.0294 3.5 9 3.5s9-1.567 9-3.5c0-1.3742-2.0366-2.5634-5-3.1361" /></svg>;
const ForwardRef = forwardRef(PinFlagIcon);
export default createLucideIcon('PinFlagIcon', ForwardRef);
