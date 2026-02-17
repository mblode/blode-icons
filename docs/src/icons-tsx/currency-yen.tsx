import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CurrencyYenIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m6 4 6 7m0 0 6-7m-6 7v9M7 16h10M7 12h10" /></svg>;
const ForwardRef = forwardRef(CurrencyYenIcon);
export default createLucideIcon('CurrencyYenIcon', ForwardRef);
