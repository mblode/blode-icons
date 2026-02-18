import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Script2Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeMiterlimit={1.5} strokeWidth={2} d="M7 15.4996V5.9964c0-.53.2105-1.038.5862-1.4123A2 2 0 0 1 9.0003 4H18" /><path stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeMiterlimit={1.5} strokeWidth={2} d="M13.9974 20H6.0329A2.0324 2.0324 0 0 1 4 17.9675v0C4 16.8809 4.8816 16 5.9682 16h5.0312C12.1039 16 13 16.8974 13 18.002v0c0 1.103.895 1.998 1.998 1.998h.004C16.105 20 17 19.105 17 18.002V9" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={1.5} strokeWidth={2} d="M19 4a2 2 0 0 1 2 2v1.0001C21 8.1047 20.1046 9 19 9h-2V6a2.0002 2.0002 0 0 1 2-2" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(Script2Icon);
export default createLucideIcon('Script2Icon', ForwardRef);
