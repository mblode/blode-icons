import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BookmarkIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 19.9948V6c0-1.6569-1.3431-3-3-3H8C6.3431 3 5 4.3431 5 6v13.9948c0 .8099.9124 1.2839 1.575.8182l3.6999-2.6005a3 3 0 0 1 3.4502 0l3.6999 2.6005c.6626.4657 1.575-.0083 1.575-.8182" /></svg>;
const ForwardRef = forwardRef(BookmarkIcon);
export default createLucideIcon('BookmarkIcon', ForwardRef);
