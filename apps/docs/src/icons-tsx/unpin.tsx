import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const UnpinIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m12.2643 6.0807.8241-1.5304c.9527-1.7694 3.3417-2.12 4.7627-.699l2.2978 2.2977c1.421 1.421 1.0703 3.81-.699 4.7627l-1.5305.8241M8 16.0001l2.9709 2.9709c1.7985 1.7985 4.8787.6834 5.109-1.8497l.0565-.6212M8 16.0001l-2.9709-2.9709c-1.7985-1.7985-.6833-4.8787 1.8497-5.109L7.5 7.8637m.5 8.1364-4 4m-1-17 18 18" /></svg>;
const ForwardRef = forwardRef(UnpinIcon);
export default createLucideIcon('UnpinIcon', ForwardRef);
