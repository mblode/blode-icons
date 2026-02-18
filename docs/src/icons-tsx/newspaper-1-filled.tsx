import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Newspaper1FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M13 5.0034v16.0488l5.8677-1.3039C20.6979 19.3416 22 17.7183 22 15.8435V7.9899c0-2.559-2.3697-4.4599-4.8677-3.9047zM11 21.0522V5.0034l-4.1323-.9182C4.3697 3.53 2 5.4309 2 7.9899v7.8536c0 1.8748 1.3021 3.4981 3.1323 3.9048z" /></svg>;
const ForwardRef = forwardRef(Newspaper1FilledIcon);
export default createLucideIcon('Newspaper1FilledIcon', ForwardRef);
