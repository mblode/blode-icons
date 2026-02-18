import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const WifiFullIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 8.0727c-5.249-4.097-12.751-4.097-18 0m3.751 5.2417c3.062-2.388 7.437-2.388 10.499 0" /><path fill="currentColor" stroke="currentColor" strokeLinecap="square" strokeWidth={0.75} d="M11.125 18.75a.875.875 0 1 0 1.7501-.0001.875.875 0 0 0-1.7501.0001Z" /></svg>;
const ForwardRef = forwardRef(WifiFullIcon);
export default createLucideIcon('WifiFullIcon', ForwardRef);
