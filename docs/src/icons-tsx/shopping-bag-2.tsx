import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ShoppingBag2Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M14.9999 8V6c0-1.6569-1.3431-3-3-3s-3 1.3431-3 3v2M7.9967 21h8.0064c1.8386 0 3.2447-1.6389 2.9651-3.4562l-1.0769-7C17.6661 9.0803 16.4069 8 14.9261 8H9.0737c-1.4808 0-2.74 1.0803-2.9652 2.5438l-1.0769 7C4.752 19.3611 6.1581 21 7.9967 21Z" /></svg>;
const ForwardRef = forwardRef(ShoppingBag2Icon);
export default ForwardRef;
