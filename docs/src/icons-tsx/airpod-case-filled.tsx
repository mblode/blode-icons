import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const AirpodCaseFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M7.5 3C5.0147 3 3 5.0147 3 7.5V9h18V7.5C21 5.0147 18.9853 3 16.5 3z" /><path fill="currentColor" fillRule="evenodd" d="M3 16.5V11h18v5.5c0 2.4853-2.0147 4.5-4.5 4.5h-9C5.0147 21 3 18.9853 3 16.5m9.0005-1c-.6904 0-1.25-.5596-1.25-1.25s.5596-1.25 1.25-1.25 1.25.5596 1.25 1.25-.5597 1.25-1.25 1.25" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(AirpodCaseFilledIcon);
export default createLucideIcon('AirpodCaseFilledIcon', ForwardRef);
