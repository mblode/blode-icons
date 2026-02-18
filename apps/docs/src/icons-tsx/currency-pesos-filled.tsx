import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CurrencyPesosFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19.75 11H4.25M19.75 7H4.25M7.25 20.75V3.25h4.6667c3.2216 0 5.8333 2.6117 5.8333 5.8333s-2.6117 5.8334-5.8333 5.8334H7.7273" /></svg>;
const ForwardRef = forwardRef(CurrencyPesosFilledIcon);
export default createLucideIcon('CurrencyPesosFilledIcon', ForwardRef);
