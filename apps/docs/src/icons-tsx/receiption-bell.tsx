import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ReceiptionBellIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.996 20h16.0001m-7.9978-3v3m0-13V4m-2 0h4M3.9961 16c0-5.5 3.5817-9 8-9s8 3.5 8 9v1h-16z" /></svg>;
const ForwardRef = forwardRef(ReceiptionBellIcon);
export default createLucideIcon('ReceiptionBellIcon', ForwardRef);
