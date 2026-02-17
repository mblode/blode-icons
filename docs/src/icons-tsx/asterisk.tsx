import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const AsteriskIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M11.998 3v18M4.2038 7.5l15.5885 9m-15.5892 0 15.5885-9" /></svg>;
const ForwardRef = forwardRef(AsteriskIcon);
export default createLucideIcon('AsteriskIcon', ForwardRef);
