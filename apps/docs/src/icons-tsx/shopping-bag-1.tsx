import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ShoppingBag1Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M14.9982 8c0 1.6569-1.3432 3-3 3s-3-1.3431-3-3M4.8224 6.8129l-.625 10C4.0894 18.54 5.461 20 7.1915 20h9.6133c1.7305 0 3.1021-1.46 2.9942-3.1871l-.625-10C19.0752 5.2318 17.764 4 16.1798 4H7.8165C6.2323 4 4.9212 5.2318 4.8224 6.8129Z" /></svg>;
const ForwardRef = forwardRef(ShoppingBag1Icon);
export default createLucideIcon('ShoppingBag1Icon', ForwardRef);
