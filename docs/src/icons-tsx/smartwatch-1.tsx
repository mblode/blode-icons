import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Smartwatch1Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3l1.5 1.5M8 19h8c1.6569 0 3-1.3431 3-3V8c0-1.6569-1.3431-3-3-3H8C6.3431 5 5 6.3431 5 8v8c0 1.6569 1.3431 3 3 3M7 5l.772-2.3162A1 1 0 0 1 8.7209 2h6.5584a1 1 0 0 1 .9487.6838L17 5zm0 14 .772 2.3162A1 1 0 0 0 8.7209 22h6.5584a1 1 0 0 0 .9487-.6838L17 19z" /></svg>;
const ForwardRef = forwardRef(Smartwatch1Icon);
export default ForwardRef;
