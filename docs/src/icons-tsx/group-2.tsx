import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Group2Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.2759 13.1471c2.4733-.6013 5.2336.6405 6.5213 3.7254C22.4674 18.4782 21.0226 20 19.2826 20h-2.2809m-6.5-13c0 1.6569-1.3431 3-3 3s-3-1.3431-3-3 1.3432-3 3-3 3 1.3431 3 3m9 0c0 1.6569-1.3431 3-3 3s-3-1.3431-3-3 1.3432-3 3-3 3 1.3431 3 3m-9.2189 13H4.7207c-1.74 0-3.1846-1.5231-2.5141-3.1287 2.1556-5.1617 8.4347-5.1617 10.5903 0C13.4674 18.4769 12.0227 20 10.2828 20" /></svg>;
const ForwardRef = forwardRef(Group2Icon);
export default createLucideIcon('Group2Icon', ForwardRef);
