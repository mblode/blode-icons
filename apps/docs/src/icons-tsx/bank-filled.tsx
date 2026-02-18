import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BankFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M22 7.764c0 1.1552-.876 2.1058-2 2.2237v6.558a3.67 3.67 0 0 1 1.5578 1.9655C21.966 19.7356 21.0546 21 19.764 21H4.236c-1.2906 0-2.202-1.2644-1.7938-2.4888A3.67 3.67 0 0 1 4 16.5457v-6.558c-1.124-.118-2-1.0685-2-2.2237a2.236 2.236 0 0 1 1.236-2l6.9751-3.4876a4 4 0 0 1 3.5778 0l6.975 3.4876a2.236 2.236 0 0 1 1.2361 2M16 10h2v6h-2zm-8 6H6v-6h2zm2 0v-6h4v6z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(BankFilledIcon);
export default createLucideIcon('BankFilledIcon', ForwardRef);
