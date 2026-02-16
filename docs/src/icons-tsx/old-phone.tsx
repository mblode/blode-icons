import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const OldPhoneIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 7v10c0 2.2091 1.7909 4 4 4h6c2.2091 0 4-1.7909 4-4V7c0-1.6569-1.3431-3-3-3H8C6.3431 4 5 5.3431 5 7m0 0V2m3 5h8v7H8z" /></svg>;
const ForwardRef = forwardRef(OldPhoneIcon);
export default ForwardRef;
